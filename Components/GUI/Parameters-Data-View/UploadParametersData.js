import React from "react";

import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";
import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import UploadParametersButton from "../UploadButton/UploadParametersButton";
import { useDispatch, useSelector } from "react-redux";
import {
  selectParametersItems,
  setParameterItems,
} from "../../../store/slices/parametersDataSlice";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { listFiles } from "../../Storage/UploadFileFunctions";
import { useEffect } from "react";

function UploadReferenceData({ type }) {
  const items = useSelector(selectParametersItems);
  const usernameID = useSelector(selectUserNameId);
  const Parameterslink = `${usernameID}/Model Parameters`;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchParametersData = async () => {
      try {
        const files = await listFiles(Parameterslink);
        console.log(files); // Do something with the files array
        files.map((file) => {
          const result = file.key.replace(/.*\//, "");

          dispatch(setParameterItems(result));
        });
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };
    fetchParametersData();
  }, []);

  return (
    <Wrapper>
      <DropDownContainer>
        <DropdownMenu items={items} />
      </DropDownContainer>
      <UploadButtonContainer>
        <UploadParametersButton />
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
  @media screen and (max-width: 900px) {
    margin: 0px;
    height: 100%;
    flex-direction: column;
  }
  @media screen and (max-width: 1200px) {
    justify-content: space-between;
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
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 70%;
    height: 100%;
    flex-direction: column;
  }
`;
const UploadButtonContainer = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 30%;
  }
  @media screen and (max-width: 900px) {
    margin: 0px;
    width: 100%;
    flex-direction: column;
  }
`;

export default UploadReferenceData;
