import React, { useEffect } from "react";
import Buttons from "./Buttons";
import { Grid, CircularProgress, Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import Test from "./Test";
import ProgressBar from "../ProgressBar";
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

  // useEffect(() => {
  //   // Simulating plot data loading
  //   setTimeout(() => {
  //     setData([
  //       /* Plot data */
  //     ]);
  //     setPlotLoaded(true);
  //   }, 2000);
  // }, []);

  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={8}
        lg={8}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Grid
          container
          direction='column'
          justifyContent='center'
          alignItems='center'
          spacing={5}
          sx={{ height: "100%" }}
        >
          <Grid
            item
            justifyContent='center'
            alignItems='center'
            sx={{ width: "100%" }}
          >
            <Buttons
            // onClickRunNGSPice={handleClickNGSpice}
            // onClickRunPython={handleClickPython}
            // onClickPlot={handleClickPlot}
            />
          </Grid>
          <Grid item>
            <ProgressBar />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4}
        lg={4}
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
  );
}

export default Optimizer;
