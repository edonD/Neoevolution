import React from "react";
import styled from "styled-components";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import UploadReferenceData from "../Reference-Data-View/UploadReferenceData";
import ResultButtons from "../Results-View/ResultButtons";
const columns = [
  {
    field: "w",
    headerName: "w",
    type: "number",
    headerAlign: "center",
    align: "center",
    flex: 1,
    editable: true,
  },
  {
    field: "l",
    headerName: "l",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  {
    field: "t",
    headerName: "t",
    type: "number",
    flex: 1,
    headerAlign: "center",
    align: "center",
    editable: true,
  },
  // {
  //   // field: "fullName",
  //   // headerName: "Full name",
  //   // description: "This column has a value getter and is not sortable.",
  //   // sortable: false,
  //   // width: 160,
  //   //   valueGetter: () =>
  //   //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

const rows = [
  { id: 1, w: "Snow", l: "Jon", t: 35 },
  { id: 2, w: "Lannister", l: "Cersei", t: 42 },
  { id: 3, w: "Lannister", l: "Jaime", t: 45 },
  { id: 4, w: "Stark", l: "Arya", t: 16 },
  { id: 5, w: "Targaryen", l: "Daenerys", t: null },
  { id: 6, w: "Melisandre", l: null, t: 150 },
  { id: 7, w: "Clifford", l: "Ferrara", t: 44 },
  { id: 8, w: "Frances", l: "Rossini", t: 36 },
  { id: 9, w: "Roxie", l: "Harvey", t: 65 },
  { id: 10, w: "Snow", l: "Jon", t: 35 },
  { id: 11, w: "Lannister", l: "Cersei", t: 42 },
  { id: 12, w: "Lannister", l: "Jaime", t: 45 },
  { id: 13, w: "Stark", l: "Arya", t: 16 },
  { id: 14, w: "Targaryen", l: "Daenerys", t: null },
  { id: 15, w: "Melisandre", l: null, t: 150 },
  { id: 16, w: "Clifford", l: "Ferrara", t: 44 },
  { id: 17, w: "Frances", l: "Rossini", t: 36 },
  { id: 18, w: "Roxie", l: "Harvey", t: 65 },
  { id: 19, w: "Snow", l: "Jon", t: 35 },
  { id: 20, w: "Lannister", l: "Cersei", t: 42 },
  { id: 21, w: "Lannister", l: "Jaime", t: 45 },
  { id: 22, w: "Stark", l: "Arya", t: 16 },
  { id: 23, w: "Targaryen", l: "Daenerys", t: null },
  { id: 24, w: "Melisandre", l: null, t: 150 },
  { id: 25, w: "Clifford", l: "Ferrara", t: 44 },
  { id: 26, w: "Frances", l: "Rossini", t: 36 },
  { id: 27, w: "Roxie", l: "Harvey", t: 65 },
];
function DataGridSecond({ type }) {
  return (
    <Container>
      <ResultButtons />
      <Data>
        <DataGrid
          rows={rows}
          columns={columns}
          // initialState={{
          //   pagination: {
          //     paginationModel: {
          //       ptSize: 10,
          //     },
          //   },
          // }}
          // pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Data>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  height: calc(100vh - 160px);

  position: relative;
  margin: 0px;
  padding: 20px 0px 0px 0px;
  @media screen and (max-height: 750px) {
    height: 100%;
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    height: 100%;
    background-color: white;
  }
`;

const Data = styled.div`
  height: calc(100vh - 240px);
  width: 100%;
  margin: 10px;
`;
const LabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: fit-content;
  width: 100%;
  margin: 5px 0px 5px 0px;
`;
const Label = styled.span`
  font-size: 16px;
  font-weight: 200;
  color: #353740;
  margin-left: 10px;
  width: 50%;
`;

export default DataGridSecond;
