import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FcFolder } from "react-icons/fc";
import { AiFillFolderOpen } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";
import styled from "styled-components";

const FileUploaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border: 1px dashed ${(props) => (props.hasFiles ? "#e0e0e0" : "#6e96f6")};
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  position: relative;

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
    left: 50%;
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
    margin-top: 10px;
  }
`;

const UploadIcon = styled(AiOutlineUpload)`
  color: #305cff;
  font-size: 24px;
`;

// const generateRandomColor = () => {
//   const colors = ["#ff5722", "#2196f3", "#4caf50", "#ff9800", "#9c27b0"];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

const FileUploader = ({ onDrop, text, color }) => {
  const [fileCount, setFileCount] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  // const [iconColor, setIconColor] = useState(generateRandomColor());

  const handleDrop = (acceptedFiles) => {
    onDrop(acceptedFiles);
    setFileCount((prevCount) => prevCount + acceptedFiles.length);
    setShowIcon(true);

    // setTimeout(() => {
    //   //   setFileCount((prevCount) => prevCount - acceptedFiles.length);
    //   if (fileCount - acceptedFiles.length === 0) {
    //     setShowIcon(false);
    //   }
    // }, 3000);
  };

  const handleRemoveInputs = () => {
    setFileCount([]);
    setShowIcon(false);
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
        <>
          <AiFillFolderOpen size={128} color={color} />
          {fileCount > 0 && <span className='file-count'>{fileCount}</span>}
          <p>{text}</p>
          <button className='remove-button' onClick={handleRemoveInputs}>
            Remove Inputs
          </button>
        </>
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
