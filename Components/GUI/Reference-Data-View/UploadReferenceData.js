import React from "react";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useEffect } from "react";
import { css } from "styled-components";

function UploadReferenceData({ type }) {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [upload, setUpload] = useState(false);

  const handleDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setUploadSuccess(true);
    setUpload(true);
    // Perform upload logic here
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  useEffect(() => {
    let timer;
    if (uploadSuccess) {
      timer = setTimeout(() => {
        setUploadSuccess(false);
      }, 3000); // 3000 milliseconds = 3 seconds
    }
    return () => {
      clearTimeout(timer);
    };
  }, [uploadSuccess]);

  return (
    <Wrapper>
      <Dropzone {...getRootProps()} isDragActive={isDragActive} upload={upload}>
        <input {...getInputProps()} />
        {file ? (
          <>
            <FileName>{file.name}</FileName>
            <SuccessIcon style={{ marginLeft: "10px" }} />
          </>
        ) : (
          <>
            <GlowingCircle>
              <UploadIcon />
            </GlowingCircle>

            <DropzoneText>
              {isDragActive ? "Drop the file here" : type}
            </DropzoneText>
          </>
        )}
      </Dropzone>
      {uploadSuccess && <UploadSuccess>Upload successful!</UploadSuccess>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  height: 80px;
`;

const Dropzone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${(props) => (props.upload ? "#e0e0e0" : "#6e96f6")};
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-color: ${(props) => (props.upload ? "white" : "#f7fafe")};
  transition: border-color 0.3s ease-in-out;
`;

const DropzoneText = styled.span`
  color: #3862ff;
  font-size: 16px;
`;

const GlowingCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e7edfe;
  box-shadow: 0 0 8px #e7edfe;
  margin-right: 10px;
  animation: glow 1.5s infinite;

  @keyframes glow {
    0% {
      box-shadow: 0 0 8px #b9bdcc;
    }
    50% {
      box-shadow: 0 0 16px #b9bdcc;
    }
    100% {
      box-shadow: 0 0 8px #b9bdcc;
    }
  }
`;

const UploadIcon = styled(AiOutlineUpload)`
  color: #305cff;
  font-size: 24px;
`;

const SuccessIcon = styled(FaCheckCircle)`
  color: green;
  margin-bottom: 10px;
  font-size: 32px;
`;

const FileName = styled.span`
  color: #333;
  font-size: 16px;
`;

const UploadSuccess = styled.p`
  color: green;
  font-size: 16px;
  margin-top: 10px;
`;

export default UploadReferenceData;
