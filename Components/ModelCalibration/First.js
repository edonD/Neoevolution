import { Button } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";
import Software from "./Software";
import dynamic from "next/dynamic";
import Gradient from "rgt";

import Img1 from "../../public/images/space.jpg";

function First() {
  return (
    <Container>
      {/* {typeof window !== "undefined" && (
        <StarfieldAnimation
          numParticles={500}
          lineWidth={1.0}
          alphaFactor={1}
          depth={1}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      )} */}
      <Body>
        <Gradient dir='left-to-right' from='#44aeff' to='#70edec'>
          <h1>Model Calibration with AI </h1>
        </Gradient>

        <h2>Dramatically shortening the chip design cycle! </h2>
        <ButtonContainer>
          <UploadButton variant='contained' component='label' color='primary'>
            <input type='file' hidden />
            Upload Data
          </UploadButton>
          <StyledButton>
            <input type='file' hidden />
            Contact US
          </StyledButton>
        </ButtonContainer>
      </Body>
      <Software />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 5;

  background: rgb(25, 64, 116);
  background: linear-gradient(
    132deg,
    rgba(59, 76, 116, 1) 0%,
    rgba(6, 20, 41, 1) 53%,
    rgba(4, 33, 77, 1) 99%
  );

  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  @media screen and (min-height: 700px) and (max-height: 850px) {
    flex-direction: column;
    justify-content: center;
    height: 80vh;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: white;
  padding-left: 00px;
  margin-top: 40px;
  @media (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;

const StyledButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    background-color: #f5c900;
    width: 220px;
    height: 50px;
    color: #235fd7;
    font-weight: 600;
    font-size: 20px;
    margin-top: 00px;
    @media (max-width: 1200px), screen and (max-height: 770px) {
      width: 180px;
      height: 38px;
      font-size: 15px;
    }
    &:hover {
      background-color: #f7d448;
    }
  }
`;
const UploadButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 220px;
    height: 50px;
    margin-right: 60px;
    background-color: transparent;
    color: white;
    cursor: pointer;
    font-size: 20px;
    border: 1px solid #f5c900;
    box-shadow: 0 0 16px rgb(0, 0, 0, 0%);
    font-weight: 600;
    @media (max-width: 1200px), screen and (max-height: 770px) {
      width: 180px;
      height: 38px;
      font-size: 15px;
    }
    &:hover {
      background: rgb(73, 61, 87);
      background: linear-gradient(
        130deg,
        rgba(73, 61, 87, 1) 0%,
        rgba(72, 51, 106, 1) 47%,
        rgba(50, 57, 95, 1) 100%
      );
    }

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

const Body = styled.div`
  height: 80%;
  width: 40%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  text-align: left;
  margin-top: 80px;
  user-select: none;
  @media (max-width: 1200px) {
    height: 50%;
    width: 90%;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 0px;
  }
  @media (max-height: 1250px) {
    margin-top: 80px;
  }
  h1 {
    margin: 0px;
    font-size: 60px;
    @media (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 36px;
    }
  }
  h2 {
    margin: 0px;
    margin-top: 30px;
    font-size: 20px;
    font-weight: 500;
    color: #6995c2;
    @media (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 18px;
    }
  }
`;

export default First;
