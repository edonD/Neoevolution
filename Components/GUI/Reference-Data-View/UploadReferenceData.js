import React from "react";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import UploadButton from "../UploadButton/UploadButton";
import { useSelector } from "react-redux";
import { selectItems } from "../../../store/slices/referenceDataSlice";

function UploadReferenceData() {
  const items = useSelector(selectItems);
  return (
    <Wrapper>
      <DropDownContainer>
        <DropdownMenu items={items} />
      </DropDownContainer>
      <UploadButtonContainer>
        <UploadButton />
      </UploadButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: 10px;
  height: 80px;
  @media screen and (max-width: 1500px) {
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    margin: 0px;
    height: 100%;
    flex-direction: column;
  }
`;

const Dropzone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${(props) => (props.upload ? "#e0e0e0" : "#6e96f6")};
  padding: 20px;
  text-align: center;
  border-radius: 6px;
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

const DropDownContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1500px) {
    width: 60%;
  }
`;
const UploadButtonContainer = styled.div`
  width: 35%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  @media screen and (max-width: 900px) {
    margin: 0px;
    width: 100%;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;

export default UploadReferenceData;
