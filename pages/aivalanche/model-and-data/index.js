import React from "react";
import styled from "styled-components";
// import Plot from "react-plotly.js";
r";

import SidebarBody from "../../../Components/GUI/SidebarBodies/SidebarBody";
import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";

function index() {
  return (
    <Container>
      <ProfileHeader />
      <SidebarBody />
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

  /* overflow-y: scr; */
`;

export default index;
