import React from "react";
import styled from "styled-components";

import Login from "../../Components/Login/Login";
function index() {
  return (
    <Container>
      <Login />
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
  background: -moz-radial-gradient(
    circle at 0% 12%,
    rgba(109, 60, 53, 1) 0%,
    rgba(55, 18, 64, 1) 21%,
    rgba(0, 0, 2, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );

  /* safari 5.1+,chrome 10+ */
  background: -webkit-radial-gradient(
    circle at 0% 12%,
    rgba(109, 60, 53, 1) 0%,
    rgba(55, 18, 64, 1) 21%,
    rgba(0, 0, 2, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );

  /* opera 11.10+ */
  background: -o-radial-gradient(
    circle at 0% 12%,
    rgba(109, 60, 53, 1) 0%,
    rgba(55, 18, 64, 1) 21%,
    rgba(0, 0, 2, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );

  /* ie 10+ */
  background: -ms-radial-gradient(
    circle at 0% 12%,
    rgba(109, 60, 53, 1) 0%,
    rgba(55, 18, 64, 1) 21%,
    rgba(0, 0, 2, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );

  /* global 92%+ browsers support */
  background: radial-gradient(
    circle at 0% 12%,
    rgba(109, 60, 53, 1) 0%,
    rgba(55, 18, 64, 1) 21%,
    rgba(0, 0, 2, 1) 35%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export default index;
