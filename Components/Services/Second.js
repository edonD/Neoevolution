import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
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
  height: 25vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #0044aa;
  background: #0044aa;
`;

const Divider = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

export default Second;
