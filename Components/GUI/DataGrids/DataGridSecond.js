import React from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import UploadReferenceData from "../Reference-Data-View/UploadReferenceData";

const columns = [
  {
    field: "w",
    headerName: "w",
    type: "number",
    headerAlign: "center",
    align: "center",
    flex: 1,
    editable: false,
    valueFormatter: ({ value }) => value.toFixed(6),
  },
  {
    field: "l",
    headerName: "l",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: false,
    valueGetter: (params) =>
      params.value ? Number(params.value).toFixed(6) : "", // Get the value and format it if it exists
    valueFormatter: (params) =>
      params.value ? Number(params.value).toFixed(6) : "", // Format the value if it exists
  },
  {
    field: "m",
    headerName: "m",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: false,
    valueGetter: (params) =>
      params.value ? Number(params.value).toFixed(2) : "", // Get the value and format it if it exists
    valueFormatter: (params) =>
      params.value ? Number(params.value).toFixed(2) : "", // Format the value if it exists
  },
  {
    field: "sa",
    headerName: "sa",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: false,
    valueFormatter: ({ value }) => value.toFixed(9),
  },
  {
    field: "sb",
    headerName: "sb",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: false,
    valueFormatter: ({ value }) => value.toFixed(9),
  },
];

// const rows = [
//   { id: 1, w: "Snow", l: "Jon", t: 35 },
//   { id: 2, w: "Lannister", l: "Cersei", t: 42 },
//   { id: 3, w: "Lannister", l: "Jaime", t: 45 },
//   { id: 4, w: "Stark", l: "Arya", t: 16 },
//   { id: 5, w: "Targaryen", l: "Daenerys", t: null },
//   { id: 6, w: "Melisandre", l: null, t: 150 },
//   { id: 7, w: "Clifford", l: "Ferrara", t: 44 },
//   { id: 8, w: "Frances", l: "Rossini", t: 36 },
//   { id: 9, w: "Roxie", l: "Harvey", t: 65 },
//   { id: 10, w: "Snow", l: "Jon", t: 35 },
//   { id: 11, w: "Lannister", l: "Cersei", t: 42 },
//   { id: 12, w: "Lannister", l: "Jaime", t: 45 },
//   { id: 13, w: "Stark", l: "Arya", t: 16 },
//   { id: 14, w: "Targaryen", l: "Daenerys", t: null },
//   { id: 15, w: "Melisandre", l: null, t: 150 },
//   { id: 16, w: "Clifford", l: "Ferrara", t: 44 },
//   { id: 17, w: "Frances", l: "Rossini", t: 36 },
//   { id: 18, w: "Roxie", l: "Harvey", t: 65 },
//   { id: 19, w: "Snow", l: "Jon", t: 35 },
//   { id: 20, w: "Lannister", l: "Cersei", t: 42 },
//   { id: 21, w: "Lannister", l: "Jaime", t: 45 },
//   { id: 22, w: "Stark", l: "Arya", t: 16 },
//   { id: 23, w: "Targaryen", l: "Daenerys", t: null },
//   { id: 24, w: "Melisandre", l: null, t: 150 },
//   { id: 25, w: "Clifford", l: "Ferrara", t: 44 },
//   { id: 26, w: "Frances", l: "Rossini", t: 36 },
//   { id: 27, w: "Roxie", l: "Harvey", t: 65 },
// ];
function DataGridSecond({ type, items, rows, callback }) {
  const [selectionModel, setSelectionModel] = React.useState([]);

  const handleSelectionModelChange = (newSelectionModel) => {
    setSelectionModel(newSelectionModel);
    callback(newSelectionModel);
    // console.log(newSelectionModel);
  };
  return (
    <Container>
      <UploadReferenceData type={type} items={items} />

      <Data>
        <DataGrid
          rows={rows}
          columns={columns}
          style={{ height: "100%", width: "100%" }}
          checkboxSelection
          rowSelection={selectionModel}
          onRowSelectionModelChange={handleSelectionModelChange}
        />
      </Data>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  /* height: calc(100vh - 200px); */
  height: 100%;
  /* padding-left: 20px; */
  position: relative;

  @media screen and (max-height: 750px) {
    /* height: calc(100vh - 200px); */
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    /* height: calc(100vh - 200px); */
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Data = styled.div`
  height: calc(100vh - 340px);

  width: 100%;
  @media screen and (max-width: 1200px) and (max-height: 750px) {
    height: 100%;
  }
  /* margin: 10px; */
`;

export default DataGridSecond;
