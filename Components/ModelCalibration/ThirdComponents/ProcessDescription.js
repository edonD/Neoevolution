import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

function ProcessDescription() {
  return (
    <Container>
      <Wrapper>
        <h1>
          Our software combined with innovative machine learning inventions will
          provide the fastest and best models for your device.
        </h1>
        <p>
          Our software provides a powerful yet easy-to-use tool for the
          characterization of devices and the generation of accurate, compact
          models, and macro - models for analog applications. It works on modern
          machine learning algorithms which are tested and proffed on many
          research experiments and publications.
        </p>
        <StyledButton>Inquire for SAAS</StyledButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 70vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
  width: 30vw;
  height: 70vh;

  h1 {
    margin: 0px;
    font-size: 25px;
    font-weight: 500;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }
  p {
    margin: 0px;
    margin-top: 10px;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 500;
    color: #d4d7da;
    @media screen and (max-width: 1200px) {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;
const StyledButton = styled(Button)`
  && {
    background-color: #0513225a;
    width: 200px;
    height: 48px;
    color: white;
    font-weight: 600;
    margin-top: 20px;

    &:hover {
      background-color: #04111e;
    }

    @media screen and (max-width: 1000px) {
      width: 180px;
      margin-right: 0;
      align-self: center;
      justify-self: flex-start;
    }
  }
`;
export default ProcessDescription;
