import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import processor from "../../../jsonFiles/processor.json";
import straight from "../../../jsonFiles/straight.json";
import linechart from "../../../jsonFiles/linechart.json";

function Results({ stateChanger }) {
  const [play, setPlay] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      setPlay(false);
      stateChanger({ third: true });
    }
    if (!inView) {
      setPlay(true);
      stateChanger({ third: false });
    }
  }, [inView]);

  return (
    <Container ref={ref}>
      <BeaconContainer>
        <Lottie
          width='700px'
          height='700px'
          speed='0.5'
          isStopped={play}
          options={{
            animationData: linechart,
            loop: false,
          }}
        />
      </BeaconContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80%;
  margin-top: 20%;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const BeaconContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  float: right;
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default Results;
