import React from "react";
import styled from "styled-components";

import Signup from "../../Components/Signup/Signup";
import SignupTest from "../../Components/Signup/SignupTest";
function index() {
  return (
    <Container>
      <SignupTest />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

export default index;
