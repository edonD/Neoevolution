import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Lottie from "lottie-react-web";
import { useInView } from "react-intersection-observer";
import animation from "../../../jsonFiles/test2.json";
import pulse from "../../../jsonFiles/pulse2.json";

function Upload({ stateChanger }) {
  const [play, setPlay] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      setPlay(false);
      stateChanger({ first: true });
    }
    if (!inView) {
      stateChanger({ first: false });
      setPlay(true);
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
            loop: false,
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
            loop: false,
          }}
        />
      </BeaconContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 300px;
  width: 100%;
  height: 70%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const FileContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  padding-bottom: 100px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const BeaconContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;

  z-index: 1;
`;

export default Upload;
