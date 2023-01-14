import React from "react";
import styled from "styled-components";
import Header from "../../Components/Home/Header";
import First from "../../Components/Services/First";
import Third from "../../Components/Services/Third";
import ThirdReplacement from "../../Components/Services/ThirdReplacement";
function index() {
  return (
    <Container>
      <Header />
      <First />
      <Third />
      <ThirdReplacement />
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
`;

export default index;
