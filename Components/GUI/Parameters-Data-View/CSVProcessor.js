export function columnExtractor(csvData) {
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");
  const columns = [];

  for (const header of headers) {
    columns.push({
      field: header,
      headerName: header.charAt(0).toUpperCase() + header.slice(1),
    });
  }
  return columns;
}

export function parseCSV(csvData) {
  const lines = csvData.split("\n");
  const headers = lines[0].split(",");
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",");
    if (values.length === headers.length) {
      const row = {};
      for (let j = 0; j < headers.length; j++) {
        row[headers[j]] = values[j];
      }
      rows.push(row);
    }
  }

  return rows;
}

export const scientificNotation = (number) => {
  if (Number(number) > 9999) {
    const formattedNumber = Number(number).toExponential();
    const [coefficient, exponent] = formattedNumber.split("e");
    const formattedExponent = exponent.startsWith("+")
      ? exponent.slice(1)
      : exponent;

    let roundedCoefficient = parseFloat(coefficient).toFixed(6);
    if (roundedCoefficient.includes(".")) {
      while (roundedCoefficient.endsWith("0")) {
        roundedCoefficient = roundedCoefficient.slice(0, -1);
      }

      if (roundedCoefficient.endsWith(".")) {
        roundedCoefficient = roundedCoefficient.slice(0, -1);
      }
    }

    return `${roundedCoefficient}e${formattedExponent}`;
  }

  return number;
};

export function convertToFormat(csvData) {
  const rows = parseCSV(csvData);
  const formattedData = [];

  for (const [index, row] of rows.entries()) {
    const formattedRow = {
      id: index,
      name: row["name"] || "",
      mode: row["mode"] || "",
      min: scientificNotation(row["min"]) || "",
      default: scientificNotation(row["default"]) || "",
      max: scientificNotation(row["max"]) || "",
      scale: row["scale"] || "",
    };

    formattedData.push(formattedRow);
  }

  return formattedData;
}

export function convertToCSV(data) {
  const header = Object.keys(data[0])
    .filter((key) => key !== "id")
    .join(",");

  // Create a header row for the CSV
  let csvData = `${header}\n`;
  console.log("CSVData", csvData);

  // Convert each data object to a CSV line
  for (const key in data) {
    const item = data[key];
    const { name, mode, min, default: defaultValue, max, scale } = item;

    const csvLine = `${name},${mode},${min},${defaultValue},${max},${scale}\n`;
    csvData += csvLine;
  }
  console.log(csvData);
  return csvData;
}
