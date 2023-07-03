import React from "react";
import styled from "styled-components";
import Image from "next/image";
function Second() {
  return (
    <Container>
      <Divider>
        <Image src='/images/simple.svg' width={75} height={75} alt='MOSFET' />
        <h1>Simple to use</h1>
      </Divider>
      <Divider>
        <Image src='/images/MLandAI.svg' width={75} height={75} alt='MOSFET' />
        <h1>Modern ML and AI</h1>
      </Divider>
      <Divider>
        <Image src='/images/config.svg' width={75} height={75} alt='MOSFET' />
        <h1>Configurable</h1>
      </Divider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #1945ad;
  background: #2196f3;
  user-select: none;
  position: relative;
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Divider = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
  h1 {
    font-size: 22px;
    font-weight: 500;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 18px;
    }
    @media screen and (max-width: 650px) {
      font-size: 16px;
    }
  }
`;

export default Second;
