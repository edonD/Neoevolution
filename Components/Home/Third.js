import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
import { Button } from "@mui/material";

function Third({ sreverse, header, paragraph, button }) {
  return (
    <Container>
      <RowContainer sreverse={sreverse}>
        <SecondPart sreverse={sreverse}>
          <BodyHeaderContainer>
            <h1>{header}</h1>
          </BodyHeaderContainer>
          <BodyBodyContainer>
            <p>{paragraph}</p>
          </BodyBodyContainer>
          <ButtonContainer>
            <RequestButton>{button}</RequestButton>
          </ButtonContainer>
        </SecondPart>
        <OnePart>
          <StyledImage>
            <Image
              src='/images/test-Software.svg'
              layout='fill'
              alt='test-Software.svg'
              color='#235fd7'
            />
          </StyledImage>
        </OnePart>
      </RowContainer>
      <Divider />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #242331;
  position: relative;
  background: #f5f5f5;

  @media screen and (max-width: 1200px) {
    padding-top: 50px;
  }
`;

const RowContainer = styled.div`
  height: 50vh;
  width: 90%;
  display: flex;
  position: relative;
  flex-direction: ${(p) => (p.sreverse === true ? "row" : "row-reverse")};

  justify-content: center;
  align-items: center;
  margin: 5px;
  user-select: none;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    height: 400px;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
`;

const RequestButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 320px;
    height: 50px;

    padding: 8px 16px;
    margin-left: 0px;
    letter-spacing: 1.5px;
    font-weight: 400;
    border-radius: 4px;

    font-size: 16px;
    transition: all 0.1s ease 0s;
    background-color: #091936;
    color: white;
    &:hover {
      background-color: white;
      color: #091936;
      border-color: transparent;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const StyledImage = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  background-color: transparent;

  cursor: pointer;
`;

const SecondPart = styled.div`
  height: 100%;
  width: 50%;
  margin: 0px 10px 0px 10px;
  user-select: none;
  display: flex;
  flex-direction: column;
  padding-left: ${(p) => (p.sreverse === true ? "0px" : "50px")};
  /* justify-content: ${(p) =>
    p.sreverse === true ? "center" : "flex-start"}; */
  justify-content: center;
  align-items: center;
  color: #232331;
  @media screen and (max-width: 1200px) {
    width: 95%;
    height: auto;
  }
`;
const BodyBodyContainer = styled.div`
  height: 30%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  p {
    font-size: 20px;
    font-weight: 200;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;
const BodyHeaderContainer = styled.div`
  height: 10%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  cursor: pointer;

  h1 {
    margin: 0px;
    font-size: 48px;
    font-weight: 200;
    color: black;
    @media screen and (max-width: 1200px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
`;
const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #bebebe;
`;
const OnePart = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  position: "relative";

  @media screen and (max-width: 1200px) {
    width: 95%;
    justify-content: center;
    height: 70%;
  }
`;

export default Third;
