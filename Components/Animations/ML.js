import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import processor from "../../../jsonFiles/processor.json";
import straight from "../../../jsonFiles/straight.json";
import { useInView } from "react-intersection-observer";

function ML({ stateChanger }) {
  const [stop, setStop] = React.useState(false);
  const [play, setPlay] = React.useState(false);

  const { ref, inView } = useInView({
    threshold: 0.6,
  });

  useEffect(() => {
    if (inView) {
      stateChanger({ second: true });
      setStop(false);
      setPlay(false);
    }
    if (!inView) {
      stateChanger({ second: false });
      setPlay(true);
    }
  }, [inView]);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("timer");
      setStop(true);
    }, 6200);
    return () => clearTimeout(timer);
  }, [stop]);

  return (
    <Container ref={ref}>
      <FileContainer>
        <Lottie
          width='500px'
          height='500px'
          isStopped={stop}
          speed='2.0'
          options={{
            animationData: processor,
            loop: true,
          }}
        />
      </FileContainer>
      <BeaconContainer>
        <Lottie
          width='500px'
          height='500px'
          speed='1.2'
          isStopped={play}
          options={{
            animationData: straight,
            loop: false,
          }}
        />
      </BeaconContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50%;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const FileContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  padding-bottom: 120px;
`;
const BeaconContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding-top: calc(80px+20vh);
  padding-top: 10vh;
`;

export default ML;
