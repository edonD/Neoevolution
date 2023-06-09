import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

function Third({ sreverse, header, paragraph }) {
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
  background: black;
  @media screen and (max-width: 1200px) {
    padding-top: 50px;
  }
`;

const RowContainer = styled.div`
  height: 50vh;
  width: 70%;
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

const StyledImage = styled.div`
  height: 85%;
  width: 95%;
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

  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => (p.sreverse === true ? "center" : "flex-start")};
  align-items: center;
  color: #232331;
  @media screen and (max-width: 1200px) {
    width: 95%;
    height: auto;
  }
`;
const BodyBodyContainer = styled.div`
  height: 80%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  p {
    font-size: 18px;
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
  height: 20%;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #232331;
  cursor: pointer;

  h1 {
    margin: 0px;
    font-size: 38px;
    font-weight: 200;
    color: white;
    @media screen and (max-width: 1200px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
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
