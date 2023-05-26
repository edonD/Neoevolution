import React from "react";
import styled from "styled-components";
import DataDescription from "./DataDescription";
import DataContainers from "./DataContainers";
import ContinueButton from "./ContinueButton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";

function InsertData() {
  const router = useRouter();
  const numRowsQueryParam = router.query.numRows;
  const initialNumRows = numRowsQueryParam
    ? parseInt(numRowsQueryParam, 10)
    : 1;
  const [numRows, setNumRows] = useState(initialNumRows);
  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    // Handle the dropped files
  };
  useEffect(() => {
    setNumRows(initialNumRows);
  }, [initialNumRows]);

  return (
    <Container>
      <TableContainer>
        {numRows === 0 ? (
          <ContinueButton />
        ) : (
          <DataDescription numRows={numRows} />
        )}
      </TableContainer>

      <InsertDataContainer>
        <DataContainers
          onDrop={handleDrop}
          text='Reference Data'
          color={"#2196f3"}
        />
        <DataContainers
          onDrop={handleDrop}
          text='Model Netlist'
          color={"#4caf50"}
        />
        <DataContainers
          onDrop={handleDrop}
          text='Model Parameters'
          color={"#ff9800"}
        />
        <DataContainers
          onDrop={handleDrop}
          text='Cost Function'
          color={"#9c27b0"}
        />
        {numRows === 0 ? <></> : <ContinueButton />}
      </InsertDataContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 150px);
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 100%;
  height: 65%;

  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

const InsertDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding-bottom: 50px;
  width: 100%;
  height: 35%;
  @media screen and (max-width: 1200px) {
    height: 100%;
    flex-direction: column;
  }
`;

export default InsertData;
