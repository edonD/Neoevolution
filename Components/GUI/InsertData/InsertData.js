import React from "react";
import styled from "styled-components";
import DataDescription from "./DataDescription";
import DataContainers from "./DataContainers";
import ContinueButton from "./ContinueButton";

function InsertData() {
  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    // Handle the dropped files
  };

  return (
    <Container>
      <TableContainer>
        <DataDescription />
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
        <ContinueButton />
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
  height: calc(100vh - 80px);
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  width: 100%;
  height: 65%;
  padding-top: 10px;
  @media screen and (max-width: 1200px) {
    height: 100%;
  }
`;

const InsertDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  width: 100%;
  height: 35%;
  @media screen and (max-width: 1200px) {
    height: 100%;
    flex-direction: column;
  }
`;

export default InsertData;
