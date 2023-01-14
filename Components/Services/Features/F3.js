import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
function F3({ stateChanger }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      stateChanger({ third: true });
    }
    if (!inView) {
      stateChanger({ third: false });
    }
  }, [inView]);
  return (
    <Container ref={ref}>
      <FixedContainer>
        <SoftwareContianer>
          <ImageContainer>
            <Image
              src='/images/Software-1.png'
              layout='fill'
              objectFit='contain' // Scale your image down to fit into the container
              alt='MOSFET'
            />
          </ImageContainer>
        </SoftwareContianer>
      </FixedContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
`;
const FixedContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  float: right;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 550px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;

  opacity: 1;
  cursor: pointer;
`;
const SoftwareContianer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  margin-top: 110px;

  h1 {
    color: black;
    text-align: left;
    margin: 0px;
    font-size: 57px;
  }
  p {
    text-align: left;
    margin: 0px;
  }
  z-index: 3;
`;
const HeaderContainer = styled.div`
  width: 65%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Wrapper = styled.div`
  padding-top: 30px;
  margin-bottom: 10px;
  width: 850px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin: 0px;
    font-size: 25px;
    font-weight: 500;
    color: black;
  }
  p {
    margin: 0px;
    margin-top: 10px;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 500;
    color: #8144aa;
  }
`;

const BenefitsContainer = styled.div`
  width: 550px;
  height: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Divider = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  h1 {
    font-size: 15px;
  }
`;

const BenefitsHeader = styled.div`
  margin-top: 20px;
  height: fit-content;
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  color: #a1a8cb;
  h3 {
    letter-spacing: 5px;
    margin: 0px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
  background: black;
  margin-left: 10px;
`;

export default F3;
