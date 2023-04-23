import dynamic from "next/dynamic";
import React from "react";
// import Plot from "react-plotly.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

function OptimizationScatterPlot() {
  const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
  const data = [
    {
      x: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5,
        5, 5, 5, 5, 5, 5, 5,
      ],
      y: [
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 15, 16, 17, 18, 19, 20, 21,
        22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
      ],
      mode: "markers",
      type: "scatter",
    },
  ];

  const layout = {
    xaxis: {
      title: "X Axis",
    },
    yaxis: {
      title: "Y Axis",
      autorange: "reversed",
    },
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
    },
  };

  return (
    <Container>
      <Plot
        data={data}
        layout={layout}
        style={{ width: "100%", height: "100%" }}
      />
    </Container>
  );
}

export default OptimizationScatterPlot;
