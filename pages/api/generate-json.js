import path from "path";
import {
  selectReferenceData,
  selectTestBench,
  selectParametersData,
  selectNetlist,
  selectAdvancedOptions,
} from "../../store/slices/calibrationSlice";

export default GenerateJSON = (req, res) => {
  const selectors = [
    selectReferenceData,
    selectTestBench,
    selectParametersData,
    selectNetlist,
    selectAdvancedOptions,
  ];

  // Get the selected values using the selectors
  const selectedValues = selectors.map((selector) => selector(req.body));

  console.log("SelectedValues", selectedValues);

  // Create an object using the selector names as keys and selected values as values
  const data = {};
  selectors.forEach((selector, index) => {
    const selectorName = selector.name.substring(7); // Remove "select" from selector name
    console.log("SelectorName", selectorName);
    data[selectorName] = selectedValues[index];
  });

  // Convert the data object to JSON
  const jsonData = JSON.stringify(data, null, 2);

  // Specify the file path
  const filePath = path.join(process.cwd(), "output.json");

  // Write the JSON data to a file
  //   fs.writeFileSync(filePath, jsonData);

  res.status(200).json({ message: "JSON file generated." });
};
