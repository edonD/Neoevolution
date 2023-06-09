import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
function First() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Model Fitting made simple</h1>
          <p>
            Get the most out of your compact models with our advanced
            calibration software.
          </p>
          <Link href='/Contact' passHref>
            <StyledButton>Contact us</StyledButton>
          </Link>
        </Header>
        <SoftwareContianer>
          <ImageContainer>
            <Image
              src='/images/test-Software.svg'
              layout='fill'
              objectFit='contain' // Scale your image down to fit into the container
              alt='MOSFET'
            />
          </ImageContainer>
        </SoftwareContianer>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: rgb(26, 64, 116);
  background: linear-gradient(
    132deg,
    rgba(59, 77, 116, 1) 0%,
    rgba(6, 20, 41, 1) 53%,
    rgba(4, 33, 77, 1) 99%
  );
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border-radius: 6px;
  opacity: 1;
  overflow: hidden;
  /* border: 1px solid #333333;
  box-shadow: 0px 0px 0px 16px #333333ca; */
  @media screen and (min-width: 950px) and (max-width: 1200px) {
    box-shadow: 0px 0px 0px 0px #333333ca;
    border: 1px solid #33333300;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 950px) {
    box-shadow: 0px 0px 0px 0px #333333ca;
    border: 1px solid #33333300;
    width: 100%;
    height: 80%;
  }
`;

const StyledButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 220px;
    height: 50px;
    background-color: #235fd7;
    padding: 8px 16px;
    margin-top: 100px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-size: 18px;
    border-radius: 4px;
    color: white;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #f9f9f9;
      color: #232331;
      border-color: transparent;
    }
    @media (max-width: 1200px) {
      margin-top: 20px;
    }
  }
`;
const Header = styled.div`
  position: relative;
  width: 40%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding: 50px;
  user-select: none;
  h1 {
    text-align: left;
    margin: 0px;
    font-size: 58px;
    @media screen and (max-width: 1200px) {
      font-size: 52px;
    }
    @media screen and (max-width: 650px) {
      font-size: 38px;
    }
  }
  p {
    text-align: left;
    margin: 0px;
    margin-top: 15px;
    font-size: 18px;
    @media screen and (max-width: 1200px) {
      margin-top: 15px;
      font-size: 14px;
    }
    @media screen and (max-width: 650px) {
      margin-top: 5px;
      font-size: 10px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 40%;
  }
`;

const SoftwareContianer = styled.div`
  position: relative;
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  user-select: none;
  /* padding-top: 50px; */
  /* border: 1px solid red; */
  h1 {
    text-align: left;
    margin: 0px;
    font-size: 57px;
  }
  p {
    text-align: left;
    margin: 0px;
  }
  z-index: 3;
  @media screen and (min-width: 1200px) and (max-width: 1400px) {
    width: 60%;
  }

  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding-top: 10vh;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Circle = styled.div`
  position: absolute;
  z-index: 15;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 50%;
  transform: translate(-60%, 50%);
  background: linear-gradient(
    to bottom,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 200px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default First;
