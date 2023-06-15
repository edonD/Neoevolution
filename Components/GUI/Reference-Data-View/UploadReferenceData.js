import React from "react";

import styled from "styled-components";
import DropdownMenuReferenceData from "../DropdownMenuReferenceData";
import UploadButton from "../UploadButton/UploadButton";

function UploadReferenceData() {
  return (
    <Wrapper>
      <DropDownContainer>
        <DropdownMenuReferenceData />
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
