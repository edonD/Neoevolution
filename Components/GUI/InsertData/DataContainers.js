import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcFolder } from "react-icons/fc";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import { RiCheckLine } from "react-icons/ri";
import { ProgressBar } from "primereact/progressbar";
import LinearProgress from "@mui/material/LinearProgress";
import styled from "styled-components";
import { useEffect } from "react";

const FileUploaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 150px;
  border: 1px dashed ${(props) => (props.hasFiles ? "#e0e0e0" : "#6e96f6")};
  border-radius: 5px;
  margin: 0px 10px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 1200px) {
    margin: 10px;
  }

  p {
    margin-top: 10px;
    margin: 10px;
    font-size: 15px;
    text-align: center;
    color: ${(props) => (props.hasFiles ? "black" : "#4075ff")};
    font-weight: light;
  }

  .file-count {
    position: absolute;
    top: 50%;
    left: 80%;
    transform: translate(-50%, -50%);
    background-color: #ff5722;
    color: #fff;
    padding: 4px 8px;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .remove-button {
    background-color: #e0e0e0;
    color: #6e96f6;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    margin: 10px 0px 10px 0px;
  }
`;

const FileCount = styled.div`
  position: absolute;
  top: 50%;
  left: 80%;
  transform: translate(-50%, -50%);
  background-color: #ff5722;
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UploadIcon = styled(AiOutlineUpload)`
  color: #305cff;
  font-size: 24px;
`;

const ProgressBarStyled = styled(LinearProgress)`
  height: 100%;
  font-size: 10px;
`;

const CounterContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 15%;
  z-index: 1;
`;

const FolderContainer = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const ProgressBarContainer = styled.div`
  background-color: white;
  width: 80%;
  height: 10%;
  border-radius: 3px;
  margin-bottom: 0.15rem;
  font-weight: normal;
`;

const ButtonContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
// const generateRandomColor = () => {
//   const colors = ["#ff5722", "#2196f3", "#4caf50", "#ff9800", "#9c27b0"];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

const FileUploader = ({ onDrop, text, color, value, done, heavy }) => {
  const [fileCount, setFileCount] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleDrop = (acceptedFiles) => {
    // const acceptedFiles = event;
    // console.log(acceptedFiles);

    onDrop(acceptedFiles);
    setFileCount((prevCount) => prevCount + acceptedFiles.length);
    setShowIcon(true);
    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
  };

  const handleRemoveInputs = () => {
    setFileCount(0);
    setShowIcon(false);
    setSelectedFiles([]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    multiple: true,
  });

  return (
    <FileUploaderWrapper {...getRootProps()} hasFiles={fileCount > 0}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : showIcon ? (
        <Container>
          <FolderContainer>
            <AiFillFolderOpen size={128} color={color} />
            <CounterContainer>
              {fileCount > 0 && <FileCount>{fileCount}</FileCount>}
            </CounterContainer>

            <p>{text}</p>
          </FolderContainer>
          {done ? (
            <RiCheckLine size={24} color='green' />
          ) : (
            <ProgressBarContainer>
              <ProgressBarStyled
                variant='determinate'
                value={value}
                style={{
                  transitionDuration: "0.0s",
                  transitionTimingFunction: "cubic-bezier(0.0, 0.0, 0.0, 0)",
                }}
              ></ProgressBarStyled>
            </ProgressBarContainer>
          )}

          <ButtonContainer>
            <span className=' remove-button' onClick={handleRemoveInputs}>
              Remove Inputs
            </span>
          </ButtonContainer>
        </Container>
      ) : (
        <>
          <UploadIcon />
          <p>Click to upload or drag & drop {text} files</p>
        </>
      )}
    </FileUploaderWrapper>
  );
};

export default FileUploader;
