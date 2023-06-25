import React from "react";
import styled from "styled-components";
import Image from "next/image";
function Second() {
  return (
    <Container>
      <Divider>
        <Image src='/images/simple.svg' width={100} height={100} alt='MOSFET' />
        <h1>Simple to use</h1>
      </Divider>
      <Divider>
        <Image
          src='/images/MLandAI.svg'
          width={100}
          height={100}
          alt='MOSFET'
        />
        <h1>Modern ML and AI</h1>
      </Divider>
      <Divider>
        <Image src='/images/config.svg' width={100} height={100} alt='MOSFET' />
        <h1>Configurable</h1>
      </Divider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 200px;
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
    font-size: 24px;
    font-weight: 500;
    @media screen and (max-width: 1200px) {
      font-size: 20px;
    }
    @media screen and (max-width: 650px) {
      font-size: 18px;
    }
  }
`;

export default Second;
