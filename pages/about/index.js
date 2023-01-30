import React from "react";
import styled from "styled-components";
import Header from "../../Components/Home/Header";
import First from "../../Components/About/First";
import Second from "../../Components/About/Second";

function index() {
  return (
    <Container>
      <Header />
      <First />
      <Second />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

export default index;
