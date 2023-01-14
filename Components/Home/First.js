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
          <h1>Active Device Modeling</h1>
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
            src='/images/test-1.jpeg'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
            alt='activeDevice'
          />
        </ImageContainer>
      </SecondWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: #42656c;
  /* background: linear-gradient(131deg, #42656c 0%, #2e353a 44%, #2a2430 100%);
  
    /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 68% 15%,
    rgba(99, 112, 128, 0.21) 0%,
    rgba(34, 38, 49, 1) 50%,
    rgba(18, 21, 26, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 68% 15%,
    rgba(99, 112, 128, 0.21) 0%,
    rgba(34, 38, 49, 1) 50%,
    rgba(18, 21, 26, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 68% 15%,
    rgba(99, 112, 128, 0.21) 0%,
    rgba(34, 38, 49, 1) 50%,
    rgba(18, 21, 26, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 68% 15%,
    rgba(99, 112, 128, 0.21) 0%,
    rgba(34, 38, 49, 1) 50%,
    rgba(18, 21, 26, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 68% 15%,
    rgba(99, 112, 128, 0.21) 0%,
    rgba(34, 38, 49, 1) 50%,
    rgba(18, 21, 26, 1) 100%
  );

  /* background: radial-gradient(
    circle at center center,
    #1e2538 0%,
    #17181d 100%
  ); */
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
    @media screen and (max-width: 1200px) {
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
    font-size: 18px;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 13px;
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
  width: 60%;
  height: 100%;
  /* margin-right: 200px; */
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
  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(34, 38, 49, 1) 37%,
    rgba(18, 21, 26, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(34, 38, 49, 1) 37%,
    rgba(18, 21, 26, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(34, 38, 49, 1) 37%,
    rgba(18, 21, 26, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(34, 38, 49, 1) 37%,
    rgba(18, 21, 26, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(34, 38, 49, 1) 37%,
    rgba(18, 21, 26, 1) 100%
  );

  z-index: 3;
`;

export default First;
