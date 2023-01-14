import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import { useInView } from "react-intersection-observer";
import animation from "../../../jsonFiles/test2.json";
import pulse from "../../../jsonFiles/pulse2.json";

function Feature2({ stateChanger, play }) {
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
      <FileContainer>
        <Lottie
          width='300px'
          height='300px'
          speed='2.0'
          isStopped={play}
          options={{
            animationData: animation,
            loop: true,
          }}
        />
      </FileContainer>
      <BeaconContainer>
        <Lottie
          width='300px'
          height='300px'
          speed='1.4'
          isStopped={play}
          options={{
            animationData: pulse,
            loop: true,
          }}
        />
      </BeaconContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 50vw;
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

export default Feature2;
