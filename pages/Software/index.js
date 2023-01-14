import React from "react";
import styled from "styled-components";
import Header from "../../Components/Home/Header";
import First from "../../Components/Software/First";
import Second from "../../Components/Software/Second";
import SecondFromHome from "../../Components/Home/Second";

import Third from "../../Components/Software/Third";
function index() {
  return (
    <Container>
      <Header />
      <First />
      <Second />
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
  height: fit-content;
  @media screen and (max-width: 1200px) {
    overflow: hidden;
  }

  /* overflow-y: scr; */
`;

export default index;
