import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import Upload from "./Animations/Upload";
import ML from "./Animations/ML";
import Results from "./Animations/Results";
import Track from "./ThirdComponents/Track";
import { motion, useAnimation } from "framer-motion";
import ProcessDescription from "./ThirdComponents/ProcessDescription";
import DisplayScreen from "./DisplayScreen";
import DataUpload from "./ThirdComponents/DataUpload";
import FinalResults from "./ThirdComponents/FinalResults";

function Third() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

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

  useEffect(() => {
    console.log(viewport1);
    console.log(viewport2);
    console.log(viewport3);
    if (viewport1.first === true) {
      setBgcolor("second");

      controls1.start("visible");
      controls2.start("hidden");
      controls3.start("hidden");
      if (viewport2.second) {
        setBgcolor("second");

        controls1.start("visible");
        controls2.start("hidden");
        controls3.start("hidden");
      }
    } else if (viewport2.second) {
      setBgcolor("third");
      controls2.start("visible");
      controls1.start("hidden");
      controls3.start("hidden");

      if (viewport3.third) {
        setBgcolor("third");
        controls2.start("visible");
        controls1.start("hidden");
        controls3.start("hidden");
      }
    } else if (viewport3.third === true) {
      setBgcolor("fourth");
      controls3.start("visible");
      controls1.start("hidden");
      controls2.start("hidden");
    } else {
      setBgcolor("first");
      controls1.start("hidden");
      controls1.start("hidden");
      controls3.start("hidden");
    }
  }, [viewport1.first, viewport2.second, viewport3.third]);

  const upload = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container setcolor={bgcolor}>
      {/* <Container> */}
      <DisplayScreen />
      <Wrapper>
        <FirstHalfWrapper>
          <Track />
        </FirstHalfWrapper>
        <SecondHalfWrapper>
          <DataUpload />
          <ProcessDescription />
          <FinalResults />
        </SecondHalfWrapper>

        <AnimationWrapper>
          <AnimatedDivider
            initial='hidden'
            animate={controls1}
            variants={upload}
          >
            <Upload stateChanger={setViewport1} />
          </AnimatedDivider>
          <AnimatedDivider
            initial='hidden'
            animate={controls2}
            variants={upload}
          >
            <ML stateChanger={setViewport2} />
          </AnimatedDivider>
          <AnimatedDivider
            initial='hidden'
            animate={controls3}
            variants={upload}
          >
            <Results stateChanger={setViewport3} />
          </AnimatedDivider>
        </AnimationWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #a42331;
  position: "relative";
  background: ${(p) =>
    p.setcolor === "first"
      ? " #242331 "
      : p.setcolor === "second"
      ? "linear-gradient(94deg, rgba(38,64,231,1) 0%, rgba(115,52,229,1) 100%);"
      : p.setcolor === "third"
      ? "   linear-gradient(94deg, rgba(73,33,136,1) 0%, rgba(176,77,240,1) 100%); "
      : "linear-gradient(0deg, #09203f 0%,#537895 100%);"};
`;

const AnimatedDivider = styled(motion.div)`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  position: "relative";
`;

const FirstHalfWrapper = styled.div`
  width: fit-content;
  height: 300vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  position: "relative";

  @media screen and (max-width: 1200px) {
    width: 20%;
    height: 120%;
    margin-bottom: 50px;
  }
`;
const SecondHalfWrapper = styled.div`
  width: 30vw;
  height: 300vh;
  display: flex;
  background-color: transparent;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: "relative";

  @media screen and (max-width: 1200px) {
    width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100%;
    margin-bottom: 50px;
  }
`;

const AnimationWrapper = styled.div`
  width: 50%;
  height: 300vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export default Third;
