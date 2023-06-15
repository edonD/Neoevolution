import React, { useEffect } from "react";
import Buttons from "./Buttons";
import { Grid, CircularProgress, Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";
import Test from "./Test";

import { Progress, ButtonGroup, Button } from "rsuite";
import styled from "styled-components";
function Optimizer() {
  const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({
    title: "i(vds) vs v(d)",
    xaxis: { title: "v(d)" },
    yaxis: { title: "i(vds)" },
    showlegend: true,
  });

  const [plotLoaded, setPlotLoaded] = useState(false);
  const [percent, setPercent] = React.useState(0);

  const decline = () => {
    const value = Math.max(percent - 10, 0);
    setPercent(value);
  };

  const increase = () => {
    const value = Math.min(percent + 10, 100);
    setPercent(value);
  };

  const status = percent === 100 ? "success" : null;
  const color = percent === 100 ? "#52c41a" : "#3385ff";
  useEffect(() => {
    // Simulating plot data loading
    if (percent < 100) {
      setTimeout(() => {
        setPercent((percent) => percent + 1);
        setPlotLoaded(true);
      }, 100);
    } else {
      // setPercent(0);
    }
  }, [percent]);

  return (
    <Container>
      <Grid
        container
        style={{
          marginTop: "50px",

          alignItems: "flex-start",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

            height: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              border: "1px solid #ededed",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Buttons
            // onClickRunNGSPice={handleClickNGSpice}
            // onClickRunPython={handleClickPython}
            // onClickPlot={handleClickPlot}
            />

            <Progress.Line
              percent={percent}
              strokeColor={color}
              status={status}
            />
          </Box>

          <Box
            sx={{
              width: "95%",
              height: "250px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "20px",
              border: "1px solid #ededed",
              borderRadius: "15px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <Buttons
            // onClickRunNGSPice={handleClickNGSpice}
            // onClickRunPython={handleClickPython}
            // onClickPlot={handleClickPlot}
            />

            <Progress.Line
              percent={percent}
              strokeColor={color}
              status={status}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "transparent",
          }}
        >
          <Box
            sx={{
              width: "95%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #ededed",
              borderRadius: "15px",
              overflow: "hidden",
            }}
          >
            <Plot
              data={data}
              layout={layout}
              style={{ width: "100%", height: "100%" }}
              config={{ responsive: true }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 90%;
`;

export default Optimizer;
