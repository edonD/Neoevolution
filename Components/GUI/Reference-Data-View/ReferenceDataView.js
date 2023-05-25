import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DataGridSecond from "../DataGrids/DataGridSecond";
import Plots from "../Plots";

// import { Plots } from "plotly.js";

function ReferenceDataView() {
  return (
    <Container>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <DataGridSecond
            type={"Click to upload or drag & drop reference data"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "transparent",
          }}
        >
          <Plots />
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
`;
export default ReferenceDataView;
