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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        xs={12}
        sm={12}
        lg={12}
        xl={12}
      >
        <DataGridSecond
          type={"Click to upload or drag & drop parameter data"}
        />
      </Grid>
    </Grid>
  );
}

export default ReferenceDataView;
