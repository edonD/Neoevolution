import React from "react";
import styled from "styled-components";
// import Plot from "react-plotly.js";
import dynamic from "next/dynamic";
import { Grid } from "@material-ui/core";
import Plots from "../../../Components/GUI/Plots";
import SidebarHeader from "../../../Components/GUI/SidebarHeader";
import SidebarBodyResults from "../../../Components/GUI/SidebarBodies/SidebarBodyResults";

function index() {
  return (
    <Container>
      <SidebarHeader />
      <SidebarBodyResults />
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
