import React from "react";
import styled from "styled-components";

function Track() {
  return (
    <Container>
      <Circle />
      <Line />
      <Circle />
      <Line />
      <Circle />
      <Line />
      <Circle />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 30vh;
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1200px) {
    margin-top: 100px;
  }
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background-color: #3a4656;
`;

const Line = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 2px;
  height: 70vh;

  background-color: #3a4656;
`;

export default Track;
