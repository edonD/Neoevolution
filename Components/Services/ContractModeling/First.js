import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
function First() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <h1>Contract Modeling</h1>
          <p>
            Cassandra Light gives you complete visibility over your entire
            fleet’s performance and emissions – delivering accurate insights
            without any hardware for the first time.
          </p>
        </Header>
        <ButtonContainer>
          <StyledButton variant='contained' component='label' color='primary'>
            Upload Data
            <input type='file' hidden />
          </StyledButton>
          <Link href='/Contact' passHref>
            <RequestButton>Contact US</RequestButton>
          </Link>
        </ButtonContainer>
      </Wrapper>
      <SecondWrapper>
        <ImageContainer>
          <Image
            src='/images/contractModeling.jpg'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
            alt='MOSFET'
          />
        </ImageContainer>
      </SecondWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: radial-gradient(
    circle at center center,
    #1e2538 0%,
    #17181d 100%
  );
  @media screen and (max-height: 750px) {
    height: 100vh;
  }
  @media screen and (max-height: 750px) and (min-width: 1000px) {
    height: 500px;
  }
`;
const ButtonContainer = styled.div`
  position: relative;
  width: 50%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  padding-left: 50px;
`;

const StyledButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 220px;
    height: 50px;
    background-color: transparent;
    padding: 8px 16px;
    border: 1px solid #ffffff1a;
    letter-spacing: 1.5px;
    font-weight: 400;
    border-radius: 4px;
    color: white;
    font-size: 16px;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #f9f9f9;
      color: #232331;
      border-color: transparent;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

const RequestButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 220px;
    height: 50px;
    background-color: white;
    padding: 8px 16px;
    margin-left: 10px;
    letter-spacing: 1.5px;
    font-weight: 400;
    border-radius: 4px;
    color: #091936;
    font-size: 16px;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #96b4f7;

      border-color: transparent;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const Header = styled.div`
  position: relative;
  width: 50%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  padding: 50px;
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
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
    text-align: left;
    margin: 0px;
    margin-top: 15px;
    font-size: 24px;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 20px;
    }
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  }
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
  color: white;
  user-select: none;
`;
const ImageContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-left: 10vh;
  justify-content: center;
  align-items: flex-start;
  background: #4776e6;
  background: linear-gradient(90deg, #091936 30%, #8e54e900 100%);
  z-index: 3;
`;

export default First;
