import React from "react";
import styled from "styled-components";

import LoginPage from "../../Components/Login/LoginPage";
function index() {
  return (
    <Container>
      <LoginPage />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* ff 3.6+ */
  background: white;
`;

export default index;
