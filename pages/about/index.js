import React from "react";
import styled from "styled-components";
import Header from "../../Components/Home/Header";
import First from "../../Components/About/First";
import Second from "../../Components/About/Second";
import Third from "../../Components/About/Third";
import Roadmap from "../../Components/Roadmap/Roadmap";

function index() {
  return (
    <Container>
      <Header />
      <First />
      <Second />
      {/* <Roadmap /> */}
      <Third />
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
