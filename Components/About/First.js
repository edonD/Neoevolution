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
            src='/images/cccoil.svg'
            layout='fill'
            objectFit='cover'
            alt='brain'
          />
        </SecondWrapper>
        <Header>
          <h1>AI in Science</h1>
          <p>
            The integration of AI and physics offers a powerful approach to
            achieving AGI, enabling machines to reason about the world more like
            humans and unlocking the potential for transformative impact on
            society.
          </p>
          <StyledButton>Contact us</StyledButton>
        </Header>
      </Wrapper>
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
  right: 0;

  position: absolute;
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: black;
  user-select: none;
  opacity: 1;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
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

    color: #091936;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #091936;
      color: white;
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
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 48px;
    }
    @media screen and (max-width: 600px) {
      font-size: 42px;
    }
  }
  p {
    width: 60%;
    text-align: left;
    margin: 0px;
    margin-top: 15px;
    font-size: 24px;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      width: 100%;
      font-size: 20px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
  z-index: 3;
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
    height: 100%;
  }
`;

export default First;
