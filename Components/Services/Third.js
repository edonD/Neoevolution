import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Track from "./ThirdComponents/Track";
import { motion, useAnimation } from "framer-motion";
import F1 from "./Features/F1";
import F4 from "./Features/F4";
import F3 from "./Features/F3";
import F2 from "./Features/F2";
import { Button } from "@mui/material";

function Third() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const [play1, setPlay1] = React.useState(false);
  const [bgcolor, setBgcolor] = React.useState("second");

  const [viewport1, setViewport1] = React.useState({
    first: false,
  });
  const [viewport2, setViewport2] = React.useState({
    second: false,
  });
  const [viewport3, setViewport3] = React.useState({
    third: false,
  });
  const [viewport4, setViewport4] = React.useState({
    fourth: false,
  });

  useEffect(() => {
    // console.log(viewport1);
    // console.log(viewport2);
    // console.log(viewport3);
    // console.log(viewport4);
    if (viewport1.first === true) {
      console.log(viewport1);
      controls1.start("visible");
      controls2.start("hidden");
      controls3.start("hidden");
      controls4.start("hidden");
    } else if (viewport2.second === true) {
      console.log(viewport2);
      setBgcolor("third");
      controls1.start("hidden");
      controls2.start("visible");
      controls3.start("hidden");
      controls4.start("hidden");
    } else if (viewport3.third === true) {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("visible");
      controls4.start("hidden");
    } else if (viewport4.fourth === true) {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("hidden");
      controls4.start("visible");
    } else {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("hidden");
      controls4.start("hidden");
    }
  }, [viewport1.first, viewport2.second, viewport3.third, viewport4.fourth]);

  const show = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  const upload = {
    hidden: {
      width: "130px",
      height: "90px",
      background: "#d0d2e3",
      boxShadow: "0px 0px 0px 0px rgba(190, 190, 190, 1)",
    },
    visible: {
      width: "130px",
      height: "90px",
      background: "#030610",
      backgroundImage: "#030610",
      boxShadow: "0px 0px 25px 1px rgba(190, 190, 190, 1)",
      transition: { duration: 0.5 },
      color: "white",
    },
  };

  const buttonUpload = {
    hidden: {
      width: "100%",
      height: "48px",
      background: "#d0d2e3",
      backgroundImage: "#d0d2e3",

      boxShadow: "0px 0px 0px 0px rgba(190, 190, 190, 1)",
    },
    visible: {
      width: "100%",
      height: "48px",

      background: "#030610",
      backgroundImage: "#030610",
      boxShadow: "0px 0px 25px 1px rgba(190, 190, 190, 1)",
      transition: { duration: 0.5 },
      color: "white",
    },
  };

  return (
    <Container>
      <Wrapper>
        <AnimationWrapper>
          <RowContainer>
            <AnimatedDivider
              initial='hidden'
              animate={controls1}
              variants={upload}
            >
              <ImageContainer
              // style={{
              //   background:
              //     " linear-gradient(to bottom, #00b4db, #0083b0)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
              // }}
              />
            </AnimatedDivider>
            <StyledImage>
              <Image
                src='/images/resistorwhite.svg'
                width='55px'
                height='55px'
                alt='resistance'
                color='#235fd7'
              />
            </StyledImage>

            <BodyContainer>
              <BodyHeaderContainer>
                <h1>Passive Device Modeling</h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>

              <ButtonAnimatedDivider
                initial='hidden'
                animate={controls1}
                variants={buttonUpload}
              >
                <Link href='Services/passive-modeling' passHref>
                  <StyledButton>Check Details</StyledButton>
                </Link>
              </ButtonAnimatedDivider>
            </BodyContainer>
          </RowContainer>
          <Track />
          <RowContainer>
            <AnimatedDivider
              initial='hidden'
              animate={controls2}
              variants={upload}
            >
              <ImageContainer />
            </AnimatedDivider>
            <StyledImage>
              <Image
                src='/images/mosfetwhite.svg'
                width='55px'
                height='55px'
                alt='MOSFET'
                color='#235fd7'
              />
            </StyledImage>

            <BodyContainer>
              <BodyHeaderContainer>
                <h1>Active Devie Modeling</h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>

              <ButtonAnimatedDivider
                initial='hidden'
                animate={controls2}
                variants={buttonUpload}
              >
                <Link href='Services/active-modeling' passHref>
                  <StyledButton>Check Details</StyledButton>
                </Link>
              </ButtonAnimatedDivider>
            </BodyContainer>
          </RowContainer>
          <Track />
          <RowContainer>
            <AnimatedDivider
              initial='hidden'
              animate={controls3}
              variants={upload}
            >
              <ImageContainer />
            </AnimatedDivider>
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

            <BodyContainer>
              <BodyHeaderContainer>
                <h1>Package Modeling</h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>
              <ButtonAnimatedDivider
                initial='hidden'
                animate={controls3}
                variants={buttonUpload}
              >
                <Link href='Services/package-modeling' passHref>
                  <StyledButton>Check Details</StyledButton>
                </Link>
              </ButtonAnimatedDivider>
            </BodyContainer>
          </RowContainer>
          <Track />
          <RowContainer>
            <AnimatedDivider
              initial='hidden'
              animate={controls4}
              variants={upload}
            >
              <ImageContainer />
            </AnimatedDivider>
            <StyledImage>
              <Image
                src='/images/contractwhite.svg'
                width='45px'
                height='45px'
                alt='Contract'
                color='#235fd7'
              />
            </StyledImage>

            <BodyContainer>
              <BodyHeaderContainer>
                <h1>Contract Modeling</h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>
              <ButtonAnimatedDivider
                initial='hidden'
                animate={controls4}
                variants={buttonUpload}
              >
                <Link href='Services/contract-modeling' passHref>
                  <StyledButton>Check Details</StyledButton>
                </Link>
              </ButtonAnimatedDivider>
            </BodyContainer>
          </RowContainer>
        </AnimationWrapper>
        <SecondHalfWrapper>
          {/* <Header>
            <h1>Software Features</h1>
          </Header> */}
          <SecondAnimationWrapper>
            <SecondAnimationDivider
              initial='hidden'
              animate={controls1}
              variants={show}
            >
              <F1 stateChanger={setViewport1} />
            </SecondAnimationDivider>
            <SecondAnimationDivider
              initial='hidden'
              animate={controls2}
              variants={show}
            >
              <F2 stateChanger={setViewport2} />
            </SecondAnimationDivider>
            <motion.div initial='hidden' animate={controls3} variants={show}>
              <F3 stateChanger={setViewport3} />
            </motion.div>
            <motion.div initial='hidden' animate={controls4} variants={show}>
              <F4 stateChanger={setViewport4} />
            </motion.div>
          </SecondAnimationWrapper>
        </SecondHalfWrapper>
      </Wrapper>
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
  background-color: #242331;
  position: relative;
  background: white;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const RowContainer = styled.div`
  height: 100px;
  width: 450px;
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  user-select: none;
  @media screen and (max-width: 800px) {
    width: 300px;
  }
`;

const StyledImage = styled.div`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;

  border-radius: 4px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  height: 90px;
  width: 90px;
  user-select: none;
  color: #232331;
  background-color: "linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6)";
  background: "linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6)";
  top: 0;
  left: 0;
  margin: 5px;
  position: absolute;
  border-radius: 4px;
`;
const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 15px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232331;

  margin-left: 15px;
`;
const BodyBodyContainer = styled.div`
  height: 60px;
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
    margin: 0px;
    font-size: 22px;
    font-weight: 200;
    color: black;
    &:hover {
      color: black;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  position: relative;
`;

const SecondHalfWrapper = styled.div`
  user-select: none;
  width: 50%;
  height: 100%;
  display: flex;
  margin-top: 50px;
  background-color: transparent;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding-left: 30px;
`;

const SecondAnimationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  position: "relative";
`;

const AnimationWrapper = styled.div`
  margin-top: 100px;
  width: 50%;
  position: sticky;
  top: 115px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: transparent;
`;
const AnimatedDivider = styled(motion.div)`
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  padding: 10px;
  position: "relative";
  margin: 5px;
  margin-right: 50px;
  border-radius: 4px;

  h1 {
    font-weight: 400;
    font-size: 18px;
  }
`;

const ButtonAnimatedDivider = styled(motion.div)`
  height: 100%;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: red;
  background: red;
  position: "relative";
  border-radius: 2px;
`;

const SecondAnimationDivider = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const StyledButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    background-color: transparent;
    width: 100%;
    height: 48px;
    color: white;
    font-weight: 600;

    border-radius: 2px;

    &:hover {
      background-color: #04111e;
    }

    @media screen and (max-width: 1000px) {
      width: 100px;
      margin-right: 0;
      align-self: center;
      justify-self: flex-start;
    }
  }
`;

export default Third;
