import React from "react";
import styled from "styled-components";
import Image from "next/image";
function Second() {
  return (
    <Container>
      <HeaderDivider>
        <h1>AI in Science: Advancing Research and Discovery</h1>
      </HeaderDivider>
      <BodyDivider>
        <h1>
          Our mission is to build cutting-edge AI tools that drive scientific
          discoveries and tackle real-world challenges. We believe in
          transparency and will be building in public, sharing our progress with
          the community. Our focus is on product delivery, ensuring our tools
          are accessible and user-friendly for domain scientists. Join us in
          shaping the future of science through collaborative innovation.
        </h1>
      </BodyDivider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  /* background-color: #f3f4f8;
  background: #f3f4f8; */
  margin: 10px;
  position: relative;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
  @media screen and (max-height: 850px) {
    height: 100%;
  }
`;

const HeaderDivider = styled.div`
  width: 70%;
  height: 50%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: black;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 0px;
    font-size: 38px;
    font-weight: 400;
    text-align: left;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
`;
const BodyDivider = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    align-items: center;
  }
  h1 {
    margin: 0px;
    font-size: 22px;
    font-weight: 200;
    text-align: left;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 18px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export default Second;
