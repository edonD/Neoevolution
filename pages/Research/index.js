import React from "react";
import Roadmap from "../../Components/Roadmap/Roadmap";
import styled from "styled-components";

function index() {
  return (
    <Container>
      <Roadmap />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
export default index;
