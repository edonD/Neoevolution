import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DataGridSecond from "../DataGrids/DataGridSecond";
import Plots from "../Plots";

// import { Plots } from "plotly.js";

function ReferenceDataView() {
  return (
    <Grid container spacing={2}>
      <Grid item xl={6}>
        <DataGridSecond />
      </Grid>
      <Grid item xl={6}>
        <Plots />
      </Grid>
    </Grid>
  );
}

export default ReferenceDataView;
