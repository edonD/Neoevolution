import React from "react";

import styled from "styled-components";
// import Plot from "react-plotly.js";
import dynamic from "next/dynamic";
import { Grid } from "@material-ui/core";

function Plots() {
  const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
  const data = [
    {
      x: [1, 2, 3, 4, 5],
      y: [2.3, 3.5, 4.2, 5.1, 6.4],
      mode: "markers",
      type: "scatter",
      name: "Data",
    },
    {
      x: [1, 2, 3, 4, 5],
      y: [2.1, 3.7, 4.0, 5.2, 6.0],
      mode: "lines",
      type: "scatter",
      name: "Regression",
      line: { color: "red", dash: "dash" },
    },
  ];

  const layout = {
    title: "ML Regression Plot",
    xaxis: { title: "X-axis" },
    yaxis: { title: "Y-axis" },
    hovermode: "closest",
  };

  const data1 = [
    {
      x: [1, 2, 3, 4, 5],
      y: [1, 4, 9, 16, 25],
      mode: "markers",
      marker: {
        color: [1, 2, 3, 4, 5], // colors based on x values
        size: 15,
        showscale: true,
      },
      text: ["Point 1", "Point 2", "Point 3", "Point 4", "Point 5"],
      hovertemplate: "X: %{x}<br>Y: %{y}<br>Text: %{text}",
      name: "Data Points",
    },
    {
      x: [0, 5],
      y: [0, 25],
      mode: "lines",
      line: {
        color: "red",
        width: 1,
      },
      name: "Trendline",
    },
  ];

  const layout1 = {
    title: "Scatter Plot with Trendline",
    xaxis: {
      title: "X Values",
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: true,
    },
    yaxis: {
      title: "Y Values",
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: true,
    },

    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
      pad: 4,
    },
  };

  const data2 = [
    {
      x: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4],
      type: "histogram",
      orientation: "h",
      marker: {
        color: "rgb(158,202,225)",
        line: {
          color: "rgb(8,48,107)",
          width: 1,
        },
      },
    },
    {
      x: [2, 3, 3, 3, 4, 4, 5, 5, 6],
      y: [0.5, 1, 2, 3, 3.5, 4, 4.5, 5, 5.5],
      type: "scatter",
      mode: "markers",
      marker: {
        color: "rgb(255,0,0)",
        size: 8,
        symbol: "circle",
        line: {
          color: "rgb(8,48,107)",
          width: 1,
        },
      },
    },
  ];

  const layout2 = {
    title: "Scatter Plot with Trendline",
    xaxis: {
      title: "Frequency",
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
    },
    yaxis: {
      title: "Value",
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
    },

    margin: {
      l: 150,
      r: 50,
      b: 50,
      t: 50,
      pad: 4,
    },
    bargap: 0.2,
    hovermode: "closest",
  };

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
      <FirstRow>
        <PlotContainer>
          <Plot
            data={data}
            layout={layout}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler={true}
          />
        </PlotContainer>

        <PlotContainer>
          <Plot
            data={data1}
            layout={layout1}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler={true}
          />
        </PlotContainer>
      </FirstRow>

      <FirstRow>
        <PlotContainer>
          <Plot
            data={data2}
            layout={layout2}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler={true}
          />
        </PlotContainer>

        <PlotContainer>
          <Plot
            data={data3}
            layout={layout3}
            style={{ width: "100%", height: "100%" }}
            useResizeHandler={true}
          />
        </PlotContainer>
      </FirstRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  padding: 10px;

  @media screen and (max-width: 1600px) {
    overflow: hidden;
    padding: 0px;
    height: 100%;
  }

  /* overflow-y: scr; */
`;

const PlotContainer = styled.div`
  height: 90%;
  width: 95%;
  background-color: #f5f5f5;
  border: 10px solid #cccccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const FirstRow = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1538px) {
    height: 100%;
    width: 90%;
    flex-direction: column;
  }
`;

export default Plots;
