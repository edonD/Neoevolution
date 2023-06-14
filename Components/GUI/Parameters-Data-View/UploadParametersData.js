import React from "react";

import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import UploadParametersButton from "../UploadButton/UploadParametersButton";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDropdownItem,
  selectParametersItems,
  setParameterItems,
} from "../../../store/slices/parametersDataSlice";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { listFiles } from "../../Storage/UploadFileFunctions";
import { useEffect } from "react";

function UploadReferenceData() {
  return (
    <Wrapper>
      <DropDownContainer>
        <DropdownMenu />
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
