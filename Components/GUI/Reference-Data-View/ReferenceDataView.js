import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DataGridSecond from "../DataGrids/DataGridSecond";
import Plots from "../Plots";
import {
  listFiles,
  retrieveJSONFromS3,
} from "../../../Components/Storage/UploadFileFunctions";
import { useDispatch, useSelector } from "react-redux";
import { selectDropdownItem } from "../../../store/slices/referenceDataSlice";
import { selectUserNameId } from "../../../store/slices/userSlice";
import {
  setLayoutfromJSON,
  setTracesfromJSON,
  setTableValues,
  setTableColumns,
} from "./JSONProcessor";

function ReferenceDataView() {
  // console.log("Link", link);
  const [jsonData, setJsonData] = useState(null);
  const [table, setTable] = useState([]);
  const [layout, setLayout] = useState({});
  const [columns, setColumns] = useState([]);
  const [path, setPath] = useState("");
  const [checkboxSelection, setCheckboxSelection] = React.useState([]);
  const [traces, setTraces] = useState([
    {
      x: [],
      y: [],
      name: "",
      mode: "lines",
    },
  ]);

  const dispatch = useDispatch();

  const file = useSelector(selectDropdownItem);
  const usernameID = useSelector(selectUserNameId);
  // const link = `${usernameID}/Reference Data`;

  const handleSelectionModelChange = (selectionModel) => {
    // Perform actions with the selection model in the parent container
    setCheckboxSelection(selectionModel);
    console.log("Selection Model:", selectionModel);
    // ... Other code logic
  };

  useEffect(() => {
    async function fetchJSONData() {
      // const userId = "498f14b0-b520-4c85-a321-e1a1c620ce66"; // Replace with the actual user ID.
      const folderName = "Reference Data"; // Replace with the desired folder name
      const fileName = "reference_data.json"; // Replace with the desired file name.
      const path = `${usernameID}/${folderName}/${file}`;
      setPath(path);

      try {
        const response = await retrieveJSONFromS3(path);
        // console.log("Response from S3", response);
        if (response) {
          // const { data } = response;
          // console.log("Data from Server", data);
          setJsonData(response);
          return response;
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchJSONData();
  }, [file]);

  // useEffect(() => {
  //   fetchLinks();
  // }, []);

  useEffect(() => {
    if (jsonData) {
      const data = setLayoutfromJSON(jsonData);
      setLayout(data);
    }
    console.log("Layout", layout);
  }, [jsonData]);

  useEffect(() => {
    if (jsonData) {
      const processedTraces = setTracesfromJSON(jsonData.data); // Call the external function to process the JSON data
      setTraces(processedTraces); // Update the traces state based on the processed data
      // console.log("Traces", processedTraces);
    }
  }, [jsonData]);

  useEffect(() => {
    if (jsonData) {
      const table = setTableValues(jsonData.data);
      console.log("Table", table);
      setTable(table);
    }
  }, [jsonData]);

  useEffect(() => {
    if (jsonData) {
      const columns = setTableColumns(jsonData.data);
      console.log("Columnsss", columns);
      setColumns(columns);
    }
  }, [jsonData]);
  return (
    <Container>
      <Grid
        container
        style={{
          // display: "flex",
          // justifyContent: "flex-start",
          // alignItems: "center",
          height: "100%",
          // backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <DataGridSecond
            rows={table}
            columns={columns}
            callback={handleSelectionModelChange}
            path={path}
          />
        </Grid>
        {traces &&
          traces
            .filter((_, index) => checkboxSelection.includes(index))
            .map((trace, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={12}
                lg={6}
                xl={6}
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  height: "100%",
                  width: "90%",
                  marginTop: "10px",
                  // backgroundColor: "lightgrey",
                  // border: "1px solid black",
                }}
              >
                <Plots layout={layout} data={[trace]} title={index} />
              </Grid>
            ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 220px);
  height: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

export default ReferenceDataView;
