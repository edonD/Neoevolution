import React from "react";

import styled from "styled-components";
import dynamic from "next/dynamic";

import { Box } from "@mui/material";

function Plots({ layout, data, title }) {
  const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
  // const Plot = dynamic(() => import("../../Components/Plotly/Plot"), {
  //   ssr: false,
  // });
  const data3 = [
    {
      x: [1, 2, 3, 4, 5],
      y: [2, 4, 1, 3, 5],
      type: "scatter",
      mode: "markers",
      marker: {
        color: "#17becf",
        size: 10,
        line: {
          color: "#ffffff",
          width: 1,
        },
      },
      hovertemplate: "x: %{x}<br>y: %{y}<extra></extra>",
    },
  ];

  const layout3 = {
    title: "Scatter Plot Example",
    xaxis: {
      title: "X-Axis",
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
    },
    yaxis: {
      title: "Y-Axis",
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
    },

    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 4,
    },
  };

  return (
    <Container>
      <PlotContainer>
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
      </PlotContainer>
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
  /* padding-top: 10px; */
  background-color: transparent;
  @media screen and (max-width: 1600px) {
    overflow: hidden;
    padding: 10px;
    height: 100%;
  }

  /* overflow-y: scr; */
`;

const PlotContainer = styled.div`
  height: 100%;
  width: 95%;
  background-color: transparent;
  border: 1px solid #ededed;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export default Plots;
