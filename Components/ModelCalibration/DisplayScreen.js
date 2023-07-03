import React from "react";
import styled from "styled-components";
import Gradient from "rgt";

function DisplayScreen() {
  return (
    <Container>
      <Div>
        <Header>
          <Gradient dir='left-to-right' from='#00DFD8' to='#007CF0'>
            24h
          </Gradient>
        </Header>
        <Description>
          <span>Model calibration</span>
        </Description>
      </Div>
      <Div>
        <Header>
          <Gradient dir='left-to-right' from='#00DFD8' to='#007CF0'>
            Parallelization
          </Gradient>
        </Header>
        <Description>
          <span>Multiple models</span>
        </Description>
      </Div>
      <Div>
        <Header>
          <Gradient dir='left-to-right' from='#00DFD8' to='#007CF0'>
            ML&AI
          </Gradient>
        </Header>
        <Description>
          <span>Custom algorithms</span>
        </Description>
      </Div>
    </Container>
  );
}
const Container = styled.div`
  width: 80%;
  margin-top: 100px;
  height: 20vh;
  border-radius: 14px;
  user-select: none;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: "relative";
`;

const Div = styled.div`
  width: 33.333%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Header = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  margin: 0px;
  font-size: 46px;
  @media screen and (max-width: 1200px), screen and (max-height: 770px) {
    font-size: 36px;
  }
  @media screen and (max-width: 900px) {
    font-size: 26px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
const Description = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
  span {
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;
export default DisplayScreen;
