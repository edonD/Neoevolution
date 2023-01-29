import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

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
        <AbsoluteImage />
        <ImageContainer style={{ width: "40%", height: "70%" }}>
          <Image
            src='/images/left-banner-1.jpeg'
            layout='fill'
            objectFit='cover' // Scale your image down to fit into the container
            alt='activeDevice'
          />
        </ImageContainer>

        <ImageContainer>
          {/* <AbsoluteImage2 /> */}
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
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #37555d;
  /* background: linear-gradient(131deg, #42656c 0%, #2e353a 44%, #2a2430 100%);
  
    /* ff 3.6+ */

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
    font-size: 84px;
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

  background-color: transparent;
`;

const AbsoluteImage = styled.div`
  bottom: 0;
  left: 0;

  position: absolute;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */

  z-index: 1;
  background: rgb(110, 14, 60);

  /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 0% 55%,
    rgba(255, 255, 0, 0) 20%,
    rgba(255, 255, 0, 0) 35%,
    rgba(59, 92, 102, 1) 47%,
    rgba(21, 32, 37, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 0% 55%,
    rgba(255, 255, 0, 0) 20%,
    rgba(255, 255, 0, 0) 35%,
    rgba(59, 92, 102, 1) 47%,
    rgba(21, 32, 37, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 0% 55%,
    rgba(255, 255, 0, 0) 20%,
    rgba(255, 255, 0, 0) 35%,
    rgba(59, 92, 102, 1) 47%,
    rgba(21, 32, 37, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 55% 0%,
    rgba(255, 255, 0, 0) 20%,
    rgba(255, 255, 0, 0) 35%,
    rgba(59, 92, 102, 1) 47%,
    rgba(21, 32, 37, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 30% 120%,
    rgba(255, 255, 0, 0) 20%,
    rgba(255, 255, 0, 0) 40%,
    rgba(59, 92, 102, 0.51) 60%,
    rgba(59, 92, 102, 1) 67%
  );

  /* transform: rotate(270deg); */
  /* background: transparent; */
`;

const AbsoluteImage2 = styled.div`
  bottom: 0;
  left: 0;

  position: absolute;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */
  background-color: red;
  z-index: 1;
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
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0) 23%,
    rgba(35, 48, 57, 1) 37%,
    rgba(38, 61, 67, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 68% -10%,
    rgba(99, 112, 128, 0.01) 0%,
    rgba(99, 112, 128, 0.1) 43%,
    rgba(99, 112, 128, 0.4) 53%,
    rgba(59, 92, 102, 1) 77%,
    rgba(22, 29, 31, 1) 90%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 0% 100%,
    rgba(22, 31, 34, 1) 0%,
    rgba(23, 32, 35, 1) 8%,
    rgba(26, 37, 40, 1) 10%,
    rgba(28, 40, 46, 1) 15%,
    rgba(31, 48, 54, 1) 20%,
    rgba(46, 74, 81, 1) 33%,

    rgba(59, 92, 102, 1) 40%
  );
`;

const GradientOnTop = styled.div`
  bottom: 0;
  left: 0;

  position: absolute;
  width: calc(40% + 300px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-end; */
  background-color: red;
  z-index: 3; /* ff 3.6+ */
  background: -moz-radial-gradient(
    circle at 29% 100%,
    rgba(23, 32, 35, 1) 0%,
    rgba(59, 92, 102, 0) 33%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 29% 100%,
    rgba(200, 98, 193, 1) 0%,
    rgba(59, 92, 102, 0) 33%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 29% 100%,
    rgba(200, 98, 193, 1) 0%,
    rgba(59, 92, 102, 0) 33%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 29% 100%,
    rgba(200, 98, 193, 1) 0%,
    rgba(59, 92, 102, 0) 33%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 70% 120%,
    rgba(22, 30, 32, 1) 10%,
    rgba(59, 92, 102, 0.2) 53%
  );
`;

const ImageContainer = styled.div`
  width: 60%;
  height: 100%;
  /* margin-right: 200px; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: transparent;
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

  z-index: 3;
`;

export default First;
