import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Gradient from "rgt";

// import Fluid from "webgl-fluid";
function First() {
  const [isAfterHydration, setIsAfterHydration] = useState(false);
  useEffect(() => {
    if (!isAfterHydration) setIsAfterHydration(true);
  }, [isAfterHydration, setIsAfterHydration]);
  return (
    <Container>
      {/* <GradientOnTop /> */}
      <Wrapper>
        <Header>
          <h1>AI Research Lab for Chip Design</h1>

          <p>
            Cassandra Light gives you complete visibility over your entire
            fleet’s performance and emissions – delivering accurate insights
            without any hardware for the first time.
          </p>
        </Header>
        <ButtonContainer>
          {/* <StyledButton variant='contained' component='label' color='primary'>
            Upload Data
            <input type='file' hidden />
          </StyledButton> */}
          <Link href='/Contact' passHref>
            <RequestButton>Contact US</RequestButton>
          </Link>
        </ButtonContainer>
      </Wrapper>
      <SecondWrapper>
        {/* <AbsoluteImage /> */}
        <ImageContainer1>
          <Image
            src='/images/left-banner-2.jpg'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
            alt='activeDevice'
          />
        </ImageContainer1>

        <ImageContainer2>
          <AbsoluteImage2 />
          <Image
            src='/images/test-1.jpeg'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
            alt='activeDevice'
          />
        </ImageContainer2>
      </SecondWrapper>
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
  background-color: black;
`;

const ButtonContainer = styled.div`
  position: relative;
  width: 50%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

const RequestButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 320px;
    height: 50px;
    background-color: white;
    padding: 8px 16px;
    margin-left: 0px;
    letter-spacing: 1.5px;
    font-weight: 400;
    border-radius: 4px;
    color: #091936;
    font-size: 16px;
    transition: all 0.2s ease 0s;
    &:hover {
      background-color: #091936;
      color: white;
      border-color: transparent;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
const Header = styled.div`
  position: relative;
  width: 40%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 50px;

  @media screen and (max-width: 1200px) {
    width: 80%;
  }
  h1 {
    /* font-weight: 400; */
    text-align: center;
    margin: 0px;
    font-size: 64px;
    text-shadow: 3px 3px 5px black;
    @media screen and (max-width: 1400px) {
      font-size: 48px;
    }
    @media screen and (max-width: 600px) {
      font-size: 42px;
    }
  }
  p {
    text-align: center;
    margin: 0px;
    margin-top: 15px;
    font-size: 18px;
    text-shadow: 3px 3px 5px black;
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

  background-color: transparent;
`;

const AbsoluteImage2 = styled.div`
  bottom: 0;
  left: 0;

  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */
  background-color: red;
  z-index: 1;
  /* ff 3.6+ */

  background: #3f5c67;
  background: rgb(41, 48, 58);
  background: linear-gradient(
    270deg,
    rgba(41, 48, 58, 0) 22%,
    rgba(41, 48, 58, 0) 50%,
    rgba(0, 0, 0, 1) 81%
  );
`;

const ImageContainer1 = styled.div`
  width: 40%;
  height: 70%;
  /* margin-right: 200px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: transparent;
  position: relative;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 90%;
  }
`;

const ImageContainer2 = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: transparent;
  position: relative;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(35, 48, 57, 1) 37%,
    rgba(38, 61, 67, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(35, 48, 57, 1) 37%,
    rgba(38, 61, 67, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(35, 48, 57, 1) 37%,
    rgba(38, 61, 67, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 88% 45%,
    rgba(99, 112, 128, 0) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(35, 48, 57, 1) 37%,
    rgba(38, 61, 67, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 80% 45%,
    rgba(99, 112, 128, 0) 0%,
    rgba(99, 112, 128, 0) 5%,
    rgba(56, 66, 79, 0.3) 15%,
    rgba(56, 66, 79, 0.7) 20%,
    rgba(78, 91, 107, 1) 35%,
    rgba(64, 93, 103, 1) 55%,
    rgba(38, 61, 67, 0) 80%
  );
  background: radial-gradient(
    circle at 80% 50%,
    rgba(99, 112, 128, 0) 0%,
    rgba(99, 112, 128, 0) 22%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 55%,
    rgba(0, 0, 0, 0) 60%
  );
  /* background: transparent; */
  @media screen and (max-width: 1200px) {
    background: transparent;
  }

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
    padding-top: 100px;
    padding-left: 5vh;
  }
  z-index: 3;
`;

export default First;
