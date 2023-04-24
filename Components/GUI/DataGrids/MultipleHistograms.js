import dynamic from "next/dynamic";
import React from "react";
// import Plot from "react-plotly.js";
import styled from "styled-components";

function MultipleHistograms() {
  const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
  const data = [
    {
      x: [1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      y: [
        0.051, 0.147, 0.319, 0.038, 0.257, 0.268, 0.02, 0.109, 0.069, 0.155,
        0.111, 0.171, 0.061, 0.17, 0.244, 0.259, 0.05, 0.027, 0.191, 0.106,
      ],
      type: "histogram",
      histnorm: "probability density",
      name: "Group 1",
      orientation: "h",
    },
    {
      x: [3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      y: [
        0.201, 0.069, 0.049, 0.218, 0.032, 0.159, 0.244, 0.128, 0.162, 0.068,
        0.135, 0.201, 0.168, 0.032, 0.221, 0.102, 0.074, 0.155, 0.114, 0.125,
      ],
      type: "histogram",
      histnorm: "probability density",
      name: "Group 2",
      orientation: "h",
    },
    {
      x: [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      y: [
        0.045, 0.163, 0.084, 0.02, 0.138, 0.276, 0.134, 0.087, 0.071, 0.123,
        0.058, 0.104, 0.033, 0.113, 0.157, 0.057, 0.057, 0.147, 0.098, 0.161,
      ],
      type: "histogram",
      histnorm: "probability density",
      name: "Group 3",
      orientation: "h",
    },
  ];

  const layout = {
    title: "Complex Histogram",
    barmode: "overlay",
    xaxis: {
      title: "Value",
      range: [0, 0.3],
    },
    yaxis: {
      title: "Density",
    },
  };

  return (
    <Container>
      <PlotContainer>
        <Plot
          data={data}
          layout={layout}
          style={{ width: "100%", height: "100%" }}
        />
      </PlotContainer>
      <PlotContainer>
        <Plot
          data={data}
          layout={layout}
          style={{ width: "100%", height: "100%" }}
        />
      </PlotContainer>
      <PlotContainer>
        <Plot
          data={data}
          layout={layout}
          style={{ width: "100%", height: "100%" }}
        />
      </PlotContainer>
      <PlotContainer>
        <Plot
          data={data}
          layout={layout}
          style={{ width: "100%", height: "100%" }}
        />
      </PlotContainer>
    </Container>
  );
}
const Container = styled.div`
  /* display: flex; */
  flex-direction: column;
  text-align: center;

  width: 100%;
  height: calc(100vh - 80px);
  border: 1px solid #ccc;
  overflow-y: auto;
`;

const PlotContainer = styled.div`
  /* overflow-y: scroll; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #cccccc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width: 90%;
  height: 300px;
  background-color: #f1f1f1;
  margin: 10px;
  display: inline-block;
  vertical-align: top;
`;
export default MultipleHistograms;
