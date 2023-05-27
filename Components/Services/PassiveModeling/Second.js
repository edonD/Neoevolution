import React from "react";
import styled from "styled-components";
import Image from "next/legacy/image";
function Second() {
  return (
    <Container>
      <HeaderDivider>
        <h1>Evolve your industry 4.0 strategy with computer vision and AI.</h1>
      </HeaderDivider>
      <BodyDivider>
        <h1>
          Industry 4.0 offers the opportunity for smart manufacturers to
          optimize their operations quickly and efficiently by knowing what
          needs attention. By using data from cameras and other Edge devices,
          manufacturers can better manage capital assets, improve processes and
          systems, monitor employee safety, and improve security.
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
  background-color: #f3f4f8;
  background: #f3f4f8;
  position: relative;
`;

const HeaderDivider = styled.div`
  width: 70%;
  height: 50%;

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
    font-size: 48px;
    font-weight: 400;
    text-align: left;
    @media screen and (max-width: 1200px) {
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
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
`;

export default Second;
