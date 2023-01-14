import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { motion, useAnimation } from "framer-motion";

import F1 from "./Features/F1";
import F4 from "./Features/F4";
import F3 from "./Features/F3";
import F2 from "./Features/F2";
// import Second from "../Home/Second";
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
    }
    if (viewport2.second === true) {
      console.log(viewport2);
      setBgcolor("third");
      controls1.start("hidden");
      controls2.start("visible");
      controls3.start("hidden");
      controls4.start("hidden");
    }
    if (viewport3.third === true) {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("visible");
      controls4.start("hidden");
    }
    if (viewport4.fourth === true) {
      controls1.start("hidden");
      controls2.start("hidden");
      controls3.start("hidden");
      controls4.start("visible");
    }
  }, [viewport1.first, viewport2.second, viewport3.third, viewport4.fourth]);

  const upload = {
    hidden: {
      backgroundColor: "transparent",
      boxShadow: "0px 0px 25px 1px rgba(190, 190, 190, 0)",
      color: "#a2a8bd",
    },
    visible: {
      backgroundColor: "#1945ad",
      boxShadow: "0px 0px 25px 1px rgba(190, 190, 190, 1)",
      transition: { duration: 0.5 },
      color: "white",
    },
  };

  return (
    <Container setcolor={bgcolor}>
      <Wrapper>
        <AnimationWrapper>
          <AnimatedDivider
            initial='hidden'
            animate={controls1}
            variants={upload}
          >
            <h1>Time Saving</h1>
          </AnimatedDivider>

          <AnimatedDivider
            initial='hidden'
            animate={controls2}
            variants={upload}
          >
            <h1>Cost Saving</h1>
          </AnimatedDivider>
          <AnimatedDivider
            initial='hidden'
            animate={controls3}
            variants={upload}
          >
            <h1>Easily controllable</h1>
          </AnimatedDivider>
          <AnimatedDivider
            initial='hidden'
            animate={controls4}
            variants={upload}
          >
            <h1>Custom machine learning and AI algorithms</h1>
          </AnimatedDivider>
        </AnimationWrapper>

        <SecondHalfWrapper>
          <Header>
            <h1>Software Features</h1>
          </Header>
          <F1 stateChanger={setViewport1} />
          <F2 stateChanger={setViewport2} />
          <F3 stateChanger={setViewport3} />
          <F4 stateChanger={setViewport4} />
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
  position: "relative";
  background: white;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  position: "relative";
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
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
  @media screen and (max-width: 1200px) {
    padding-left: 0px;
    width: 100%;
  }
`;

const Header = styled.div`
  width: 550px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1200px) {
    height: 100px;
  }
  @media screen and (max-width: 650px) {
    width: 100%;
  }
  h1 {
    font-size: 58px;
    margin: 0px;
    @media screen and (max-width: 1200px) {
      font-size: 38px;
    }
    @media screen and (max-width: 650px) {
      font-size: 28px;
    }
  }
`;

const AnimationWrapper = styled.div`
  margin-top: 250px;
  width: 40%;
  position: sticky;
  top: 95px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: transparent;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const AnimatedDivider = styled(motion.div)`
  height: 20%;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  padding: 10px;

  margin: 5px;
  margin-right: 50px;

  h1 {
    font-weight: 400;
    font-size: 18px;
  }
`;

export default Third;
