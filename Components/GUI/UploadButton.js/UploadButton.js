import { useState } from "react";
import Button from "@mui/material/Button";

import { FiUploadCloud, FiCheck, FiX } from "react-icons/fi";
import { Typography } from "@mui/material";
import styled from "styled-components";

function UploadButton() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileUploaded(true);
  };

  return (
    <ButtonContainer>
      <input
        accept='/*'
        id='file-upload'
        type='file'
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />
      <label htmlFor='file-upload'>
        <StyledButton
          variant='contained'
          component='span'
          startIcon={<FiUploadCloud />}
        >
          <span>Upload New Data</span>
        </StyledButton>
      </label>
    </ButtonContainer>
  );
}
const ButtonContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  && {
    height: 40px;

    @media screen and (min-width: 901px) and (max-width: 1500px) {
      span {
        font-size: 11px;
      }
    }
    @media screen and (max-width: 900px) {
      span {
        font-size: 12px;
      }
    }
  }
`;
export default UploadButton;
