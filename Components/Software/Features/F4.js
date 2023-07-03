import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
function F4({ stateChanger }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  useEffect(() => {
    if (inView) {
      stateChanger({ fourth: true });
    }
    if (!inView) {
      stateChanger({ fourth: false });
    }
  }, [inView]);
  return (
    <Container ref={ref}>
      <Header>
        <h1>Easily Controllable</h1>
      </Header>
      <SoftwareContianer>
        <ImageContainer>
          <Image
            src='/images/test-Software.svg'
            layout='fill'
            objectFit='contain' // Scale your image down to fit into the container
            alt='MOSFET'
          />
        </ImageContainer>
      </SoftwareContianer>
      <Wrapper>
        <HeaderContainer>
          <p>Custom machine learning and AI algorithms</p>
        </HeaderContainer>
        <HeaderContainer>
          <h1>
            Many format support for of measurement data. Very simple upload
            process.
          </h1>
        </HeaderContainer>
      </Wrapper>
      <BenefitsHeader>
        <h3>Benefits</h3>
        <Line />
      </BenefitsHeader>
      <BenefitsContainer>
        <Divider>
          <Image src='/images/time.svg' width={50} height={50} alt='MOSFET' />
          <h1>Time Saving</h1>
        </Divider>
        <Divider>
          <Image
            src='/images/savings.svg'
            width={50}
            height={50}
            alt='MOSFET'
          />
          <h1>Cost Saving</h1>
        </Divider>
        <Divider>
          <Image
            src='/images/control.svg'
            width={50}
            height={50}
            alt='MOSFET'
          />
          <h1>Easily controllable</h1>
        </Divider>
        <Divider>
          <Image
            src='/images/MLandAI.svg'
            width={50}
            height={50}
            alt='MOSFET'
          />

          <h1>ML and AI </h1>
        </Divider>
      </BenefitsContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 800px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;
  @media screen and (max-width: 650px) {
    justify-content: center;
    align-items: center;
  }
`;
const Header = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  @media screen and (min-width: 1200px) {
    display: none;
  }
  h1 {
    margin: 0px 0px 20px 0px;
    font-size: 34px;
    color: black;
  }
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

  border: 1px solid white;

  @media screen and (max-width: 650px) {
    width: 90%;
  }
`;
const SoftwareContianer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: white;

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
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
`;
const HeaderContainer = styled.div`
  width: 65%;
  height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 650px) and (max-width: 1200px) {
    width: 550px;
    margin-left: 10px;
  }
  @media screen and (max-width: 650px) and (max-width: 1200px) {
    margin-left: 10px;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding-top: 30px;
  margin-bottom: 10px;
  width: 100%;

  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    margin: 0px;
    font-size: 22px;
    font-weight: 500;
    color: black;
  }
  p {
    margin: 0px;
    margin-top: 10px;
    line-height: 1.5;
    font-size: 18px;
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
  @media screen and (min-width: 650px) and (max-width: 1200px) {
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 650px) and (max-width: 1200px) {
    width: 100%;
  }
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
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 10px;
    }
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
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-left: 10px;
  }
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

export default F4;
