import React from "react";
import styled from "styled-components";
import Image from "next/image";
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
  min-height: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f7;
  background: #f2f4f7;
  position: relative;

  padding: 20px;
  border-radius: 15px;
`;

const HeaderDivider = styled.div`
  width: 70%;
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #101419;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 0px;
    font-size: 38px;
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
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  color: #333841;
  @media screen and (max-width: 1200px) {
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 0px;
    font-size: 22px;
    font-weight: 300;
    text-align: left;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }
`;

export default Second;
