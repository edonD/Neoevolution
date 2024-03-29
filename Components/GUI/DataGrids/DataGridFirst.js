import React from "react";
import styled from "styled-components";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import SelectButtons from "../SelectButtons";
import DropdownMenu from "../DropdownMenu";
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
function DataGridFirst() {
  return (
    <Container>
      <DropdownMenu
        items={[
          { label: "aNMOS-BSIM4", value: "option1" },
          { label: "PMOS-BSIM4", value: "option2" },
          { label: "PMOS-HiSIM", value: "option3" },
          { label: "NMOS-HiSIM", value: "option4" },
          { label: "Diode", value: "option5" },
          { label: "Capacitor", value: "option6" },
          { label: "Resistor", value: "option7" },
        ]}
      />
      <SelectButtons />
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
  width: 100%;
  height: calc(100vh - 100px);

  position: relative;
  margin: 0px;
  padding-top: 20px;
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    /* background-color: red; */
  }
  @media screen and (max-width: 1600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 90%;
    /* background-color: blue; */
  }
`;

const Data = styled.div`
  height: calc(100vh - 300px);
  width: 100%;
  @media screen and (max-width: 1600px) {
    height: 100%;
  }
`;
export default DataGridFirst;
