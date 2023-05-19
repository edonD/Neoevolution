import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DataGridSecond from "../DataGrids/DataGridSecond";
import Plots from "../Plots";

// import { Plots } from "plotly.js";

function ReferenceDataView() {
  return (
    <Grid
      container
      spacing={2}
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <Grid itemxs={12} sm={12} lg={12} xl={6}>
        <DataGridSecond
          type={"Click to upload or drag & drop reference data"}
        />
      </Grid>
      <Grid item xs={12} sm={12} lg={12} xl={6}>
        <Plots />
      </Grid>
    </Grid>
  );
}

export default ReferenceDataView;
