import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
function First() {
  return (
    <Container>
      <Wrapper>
        <SecondWrapper>
          <Image
            src='/images/test-2.jpg'
            layout='fill'
            objectFit='cover'
            alt='brain'
          />
        </SecondWrapper>
        <Header>
          <h1>Where the World Builds AI</h1>
          <p>
            An AI development ecosystem and AI lake made for developers and data
            scientists. AI apps for operators.
          </p>
          <StyledButton>Contact us</StyledButton>
        </Header>
      </Wrapper>
      <Description>
        <p>Passive Device Modelling</p>
        <p>Active Device Modelling</p>
        <p>Package Modelling</p>
        <p>Contract Modelling</p>
      </Description>
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
  position: relative;
  background: #040711;
  /* background: radial-gradient(
    circle at center center,
    #1e2538 0%,
    #17181d 100%
  ); */
`;
const ImageContainer = styled.div`
  position: relative;
  width: 700px;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: 1;
  border: 1px solid #333333;
  box-shadow: 0px 0px 0px 16px #333333ca;
`;

const SecondWrapper = styled.div`
  top: 0;
  left: 0;

  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: black;
  user-select: none;
  opacity: 0.7;
`;

const StyledButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 220px;
    height: 50px;
    background-color: white;
    padding: 8px 16px;
    margin-top: 20px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-size: 18px;
    border-radius: 4px;
    color: #2350ef;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #f9f9f9;
      color: #232331;
      border-color: transparent;
    }
  }
`;
const Header = styled.div`
  position: relative;
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 50px;

  h1 {
    text-align: left;
    margin: 0px;
    font-size: 58px;
    @media screen and (max-width: 1200px) {
      font-size: 48px;
    }
    @media screen and (max-width: 600px) {
      font-size: 42px;
    }
  }
  p {
    width: 50%;
    text-align: left;
    margin: 0px;
    margin-top: 15px;
    font-size: 24px;
    @media screen and (max-width: 1200px) {
      width: 100%;
      font-size: 20px;
    }
    @media screen and (max-width: 600px) {
      width: 100%;
      font-size: 18px;
    }
  }
  z-index: 3;
`;

const Description = styled.div`
  position: relative;
  width: 100%;
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #2350ef;

  background-color: #eeeeee;
  background: #eeeeee;

  p {
    text-align: center;
    margin: 0px;
    font-weight: 200;
    font-size: 22px;
    color: #030610;

    @media screen and (min-width: 600px) and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (min-width: 200px) and (max-width: 600px) {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    height: 90px;
  }
`;

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  background-color: #020610;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 750px) {
    height: 100vh;
  }
`;

export default First;
