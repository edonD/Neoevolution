import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@mui/material";

function ThirdReplacement() {
  return (
    <Container>
      <AnimationWrapper>
        <RowContainer>
          <ImageContainer>
            <StyledImage>
              <Image
                src='/images/resistorwhite.svg'
                width='55px'
                height='55px'
                alt='test-Software.svg'
                color='#235fd7'
              />
            </StyledImage>
          </ImageContainer>
          <BodyContainer>
            <BodyHeaderContainer>
              <h1>Passive Device Modeling</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>Machine learning methodology for package model extraction.</p>
            </BodyBodyContainer>
            <ButtonDivider>
              <Link href='Services/passive-modeling' passHref>
                <StyledButton>Check Details</StyledButton>
              </Link>
            </ButtonDivider>
          </BodyContainer>
        </RowContainer>

        <RowContainer>
          <ImageContainer>
            <StyledImage>
              <Image
                src='/images/mosfetwhite.svg'
                width='55px'
                height='55px'
                alt='MOSFET'
                color='#235fd7'
              />
            </StyledImage>
          </ImageContainer>

          <BodyContainer>
            <BodyHeaderContainer>
              <h1>Active Devie Modeling</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>Machine learning methodology for package model extraction.</p>
            </BodyBodyContainer>
            <ButtonDivider>
              <Link href='Services/active-modeling' passHref>
                <StyledButton>Check Details</StyledButton>
              </Link>
            </ButtonDivider>
          </BodyContainer>
        </RowContainer>

        <RowContainer>
          <ImageContainer>
            <StyledImage
            // style={{
            //   background:
            //     "linear-gradient(310deg, #91EAE4 0%, #86A8E7 50%, #7F7FD5 100%) " /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
            // }}
            >
              <Image
                src='/images/icwhite.svg'
                width='55px'
                height='55px'
                alt='MOSFET'
                color='#235fd7'
              />
            </StyledImage>
          </ImageContainer>
          <BodyContainer>
            <BodyHeaderContainer>
              <h1>Package Modeling</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
                Machine learning methodology for package model extraction.
              </p>
            </BodyBodyContainer>
            <ButtonDivider>
              <Link href='Services/package-modeling' passHref>
                <StyledButton>Check Details</StyledButton>
              </Link>
            </ButtonDivider>
          </BodyContainer>
        </RowContainer>

        <RowContainer>
          <ImageContainer>
            <StyledImage>
              <Image
                src='/images/contractwhite.svg'
                width='45px'
                height='45px'
                alt='Contract'
                color='#235fd7'
              />
            </StyledImage>
          </ImageContainer>
          <BodyContainer>
            <BodyHeaderContainer>
              <h1>Contract Modeling</h1>
            </BodyHeaderContainer>
            <BodyBodyContainer>
              <p>Machine learning methodology for package model extraction.</p>
            </BodyBodyContainer>
            <ButtonDivider>
              <Link href='Services/contract-modeling' passHref>
                <StyledButton>Check Details</StyledButton>
              </Link>
            </ButtonDivider>
          </BodyContainer>
        </RowContainer>
      </AnimationWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  @media screen and (min-width: 200px) and (max-width: 299px) {
    margin-top: 50px;
  }
`;

const RowContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  margin: 20px;
  position: relative;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 5px;
  background-color: white;
  user-select: none;
`;

const StyledImage = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: #030610;
  border-radius: 4px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 30%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const BodyContainer = styled.div`
  height: 100%;
  width: 90%;
  padding-left: 15px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232331;
  margin-left: 15px;
  padding-bottom: 10px;

  float: none;
  overflow: hidden;
  border-bottom: 1px solid #d0d2e4;
  @media screen and (min-width: 900px) and (max-width: 1100px) {
    width: 86%;
  }
  @media screen and (min-width: 800px) and (max-width: 899px) {
    width: 83%;
  }
  @media screen and (min-width: 700px) and (max-width: 799px) {
    width: 80%;
  }
  @media screen and (min-width: 600px) and (max-width: 699px) {
    width: 78%;
  }
  @media screen and (min-width: 500px) and (max-width: 599px) {
    width: 74%;
  }
  @media screen and (min-width: 300px) and (max-width: 499px) {
    width: 62%;
  }
  @media screen and (min-width: 200px) and (max-width: 299px) {
    width: 50%;
  }
`;
const BodyBodyContainer = styled.div`
  height: fit-content;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #989898;
  p {
    font-size: 15px;
    font-weight: 200;
  }
`;
const BodyHeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #232331;
  cursor: pointer;

  h1 {
    font-weight: 200;
    margin: 0px;
    font-size: 22px;
    color: black;
    &:hover {
      color: black;
    }
  }
`;

const AnimationWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonDivider = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  position: "relative";
  border-radius: 2px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #030610;
    width: 150px;
    height: 48px;
    color: white;
    font-weight: 600;

    border-radius: 2px;

    &:hover {
      background-color: #04111e;
    }
  }
`;

export default ThirdReplacement;
