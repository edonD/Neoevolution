import React from "react";
import styled from "styled-components";

function Track() {
  return (
    <Container>
      <Line />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 406px;
  display: flex;
  flex-direction: flex-start;
  justify-content: flex-start;
  align-items: center;
`;

const Line = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 2px;
  height: 10vh;

  background-color: #d0d2e4;
`;

export default Track;
