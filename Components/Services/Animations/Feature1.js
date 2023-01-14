import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import { useInView } from "react-intersection-observer";
import animation from "../../../jsonFiles/test2.json";
import pulse from "../../../jsonFiles/pulse2.json";

function Upload({ stateChanger, play }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      stateChanger({ first: true });
    }
    if (!inView) {
      stateChanger({ first: false });
    }
  }, [inView]);
  return (
    <Container ref={ref}>
      <h1>Simple Use</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  height: 70vh;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const FileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 150px;
`;
const BeaconContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export default Upload;
