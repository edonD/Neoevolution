import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion, animate } from "framer-motion";
import Image from "next/image";

function Progressbar() {
  const [count, setCount] = useState(0);

  const [shadow, setShadow] = useState({
    firstCircle: false,
    secondCircle: false,
    thirdCircle: false,
  });

  useEffect(() => {
    let intervalId = null;

    if (count <= 17) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount + 0.1);
      }, 10);
    } else if (count < 47 && count >= 17) {
      intervalId = setInterval(() => {
        setShadow({
          firstCircle: true,
          secondCircle: false,
          thirdCircle: false,
        });
        setCount((prevCount) => prevCount + 1);
      }, 10);
    } else if (count < 77 && count >= 47) {
      intervalId = setInterval(() => {
        setShadow({
          firstCircle: true,
          secondCircle: true,
          thirdCircle: false,
        });
        setCount((prevCount) => prevCount + 1);
      }, 10);
    } else if (count < 97 && count >= 77) {
      intervalId = setInterval(() => {
        setShadow({
          firstCircle: true,
          secondCircle: true,
          thirdCircle: true,
        });
        setCount((prevCount) => prevCount + 1);
      }, 10);
    } else if (count >= 97) {
      clearInterval(intervalId);
      // setCount(0);
    }

    return () => clearInterval(intervalId);
  }, [count]);
  return (
    <Container>
      <TextDiv>
        <TextContainer shadow={shadow.firstCircle} up={"false"}>
          <h1>Current State</h1>
        </TextContainer>
        <TextContainer shadow={shadow.firstCircle} up={"false"}>
          <h1></h1>
        </TextContainer>
        <TextContainer shadow={shadow.firstCircle} up={"false"}>
          <h1></h1>
        </TextContainer>
      </TextDiv>
      {/* <TestDivider> */}

      <Mask>
        <Intro />

        <Circle shadow={shadow.firstCircle} />
        <Body />

        <Circle shadow={shadow.secondCircle} />
        <Body />
        <Circle shadow={shadow.thirdCircle} />
        <Intro />
        <AnimatedDivider style={{ scaleX: count }} />
      </Mask>
      <TextDiv>
        <TextContainer shadow={shadow.firstCircle}>
          <h1>Model Calibration</h1>
          <h2>100x times faster Higher accuracy</h2>
        </TextContainer>

        <TextContainer shadow={shadow.secondCircle}>
          <h1>AI IP Generated</h1>
          <h2>100x times faster Higher accuracy</h2>
        </TextContainer>
        <TextContainer shadow={shadow.thirdCircle}>
          <h1>AI Circuit Generated</h1>
          <h2>100x times faster Higher accuracy</h2>
        </TextContainer>
      </TextDiv>
      {/* </TestDivider> */}

      {/* <AnimatedContainer>
        <AnimatedDivider
      
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: 2,
          }}
        />
      </AnimatedContainer> */}
      {/* <AnimatedTextContainer>
        <p ref={progressTextRef}>0</p>
        <p>%</p>
      </AnimatedTextContainer> */}
    </Container>
  );
}

export default Progressbar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #001c58;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  z-index: -1;
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  opacity: 1;
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

const Mask = styled.div`
  width: 1500px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 50px;
  position: relative;
  top: 0; /* position the top  edge of the element at the middle of the parent */
  left: 0; /* position the left edge of the element at the mid*/
  right: 0;
  background-color: transparent;
  z-index: 2;
  top: 0; /* position the top  edge of the element at the middle of the parent */
  left: 0; /* position the left edge of the element at the middle of the parent */

  //transform: translate(-50%, -50%);
`;

const Intro = styled.div`
  /* Size */
  width: 18%;
  border-top: dashed ${(props) => (props.large ? 3 : 1)}px #392158;

  background-size: contain;
  /* Content alignment */
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch; */
  position: relative;
  /* Style */
  /* border-radius: 60px; */
  background-size: cover;
  /* box-shadow: 0px 0px 20px #111; */
  /* border: 1px dotted black; */
  /* overflow: hidden; */
  z-index: 1;
  opacity: 1;
`;

const Body = styled.div`
  /* Size */
  width: 30%;
  border: solid 1px #392158;

  /* Content alignment */
  /* display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch; */
  position: relative;
  /* Style */

  /* box-shadow: 0px 0px 20px #111; */
  /* border: 1px dotted black; */
  /* overflow: hidden; */
  z-index: 1;
  opacity: 1;
`;
const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  border: 3px solid ${(props) => (props.shadow ? "white" : "#392158")};
  background-color: ${(props) => (props.shadow ? "#f63869" : "transparent")};
  z-index: 3;

  box-shadow: 0px 0px ${(props) => (props.shadow ? 150 : 0)}px
    ${(props) => (props.shadow ? 20 : 0)}px
    ${(props) => (props.shadow ? "white" : "#392158")}; /* Add a shadow */
  cursor: pointer;
  //transition: box-shadow 0.3s ease-in-out; /* Add a transition for the shadow */
  /* &:hover {
    box-shadow: 0 0 20px #4caf50; /* Increase the size of the shadow on hover */
`;

const AnimatedDivider = styled(motion.div)`
  /* Size */

  position: absolute;
  top: 49.7%; /* position the top  edge of the element at the middle of the parent */
  left: 0; /* position the left edge of the element at the middle of the parent */

  transform: translate(-50%, -50%);
  height: 5px;
  width: 1%;
  background: #f13769;
  transform-origin: 0%;
  z-index: 1;
`;

const TextDiv = styled.div`
  margin-top: 50px;
  width: 1500px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin: 50px;
  position: relative;
  top: 0; /* position the top  edge of the element at the middle of the parent */
  left: 0; /* position the left edge of the element at the mid*/
  right: 0;
  background-color: transparent;
  z-index: 2;
  top: 0; /* position the top  edge of the element at the middle of the parent */
  left: 0; /* position the left edge of the element at the middle of the parent */

  //transform: translate(-50%, -50%);
`;

const TextContainer = styled.div`
  /* Content alignment */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.up ? "flex-end" : "flex-start")};
  height: 300px;
  width: 300px;
  background-color: transparent;
  color: ${(props) => (props.shadow ? "white" : "#3f537c")};
  border: 1px solid green;
  h1 {
    margin: 0px;
    text-align: center;

    font-size: 26px;
  }
  h2 {
    font-weight: 200;
    font-size: 16px;
    text-align: center;
  }
`;
