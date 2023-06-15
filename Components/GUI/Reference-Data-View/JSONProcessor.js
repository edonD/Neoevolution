export const setLayoutfromJSON = function (JSONFile) {
  if (JSONFile !== null) {
    console.log("Data for JSON:", JSONFile);

    return {
      title: JSONFile.title,
      xaxis: {
        title: JSONFile.data[0].x_name,
        // autorange: true,
        // showgrid: false,
        // zeroline: false,
        // showline: false,
      },
      yaxis: {
        title: JSONFile.data[0].y_name,
        // autorange: true,
        // showgrid: false,
        // zeroline: false,
        // showline: false,
      },
      // margin: {
      //   l: 50,
      //   r: 50,
      //   b: 50,
      //   t: 50,
      //   pad: 4,
      // },
    };
  }

  return null;
};

export const setTracesfromJSON = function (jsonData) {
  if (jsonData) {
    const colors = ["#17becf", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"]; // Define an array of colors

    return jsonData.flatMap((item, index) => {
      const traces = [];

      for (let i = 0; i < item.curves.length; i++) {
        const curve = item.curves[i];

        const trace = {
          x: curve.x_values,
          y: curve.y_values,
          type: "scatter",
          mode: "lines",
          marker: {
            color: colors[(index + i) % colors.length], // Assign a color from the array based on index
            size: 10,
            line: {
              color: "#ffffff",
              width: 1,
            },
          },
          hovertemplate: "x: %{x}<br>y: %{y}<extra></extra>",
        };

        traces.push(trace);
      }

      return traces;
    });
  }

  return null;
};

export const setTableValues = function (jsonData) {
  if (jsonData) {
    const tableValues = [];

    for (let i = 0; i < jsonData.length; i++) {
      const item = jsonData[i];
      console.log("item", item);
      const tableValue = {
        id: i,
        w: item.instance_parameters.w,
        l: item.instance_parameters.l,
        m: item.instance_parameters.m,
        sa: item.instance_parameters.sa,
        sb: item.instance_parameters.sb,
      };
      // console.log("tableValue", tableValue);
      tableValues.push(tableValue);
    }

    return tableValues;
  }
};

export const setTableColumns = function (jsonData) {
  const instanceParameters = jsonData[0].instance_parameters;
  const instanceParameterKeys = Object.keys(instanceParameters);
  return instanceParameterKeys;
};
