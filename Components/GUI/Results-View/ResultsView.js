import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DataGridResults from "../DataGrids/DataGridResults";
import Plots from "../Plots";

// import { Plots } from "plotly.js";

function ReferenceDataView() {
  return (
    <Grid container spacing={2}>
      <Grid item xl={6}>
        <DataGridResults
          type={"Click to upload or drag & drop reference data"}
        />
      </Grid>
      <Grid item xl={6}>
        <Plots />
      </Grid>
    </Grid>
  );
}

export default ReferenceDataView;
