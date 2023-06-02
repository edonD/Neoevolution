import React from "react";
import styled from "styled-components";
import DataDescription from "./DataDescription";
import DataContainers from "./DataContainers";
import ContinueButton from "./ContinueButton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { uploadFile } from "../../Storage/UploadFileFunctions";

function InsertData() {
  const [selectedFile, setSelectedFile] = useState(null);

  const router = useRouter();
  const numRowsQueryParam = router.query.numRows;
  const initialNumRows = numRowsQueryParam
    ? parseInt(numRowsQueryParam, 10)
    : 0;
  const [numRows, setNumRows] = useState(initialNumRows);

  const handleReferenceDataDrop = (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        console.error("No file selected");
        return;
      }

      const userId = "USER_ID"; // Replace with the actual user ID.
      const folderName = "Reference Data"; // Replace with the desired folder name.
      acceptedFiles.forEach((file) => {
        uploadFile(userId, file.path, folderName);
        console.log("File uploaded successfully:", file.path);
      });
    } catch (error) {
      console.error("Error uploading Reference Data files:", error);
    }
  };

  const handleModelNetlistDrop = (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        console.error("No file selected");
        return;
      }

      const userId = "USER_ID"; // Replace with the actual user ID.
      const folderName = "Model Netlist"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(userId, file.path, folderName);
        console.log("Model Netlist files uploaded successfully");
      });
    } catch (error) {
      console.error("Error uploading Model Netlist files:", error);
    }
  };

  const handleModelParametersDrop = (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        console.error("No file selected");
        return;
      }

      const userId = "USER_ID"; // Replace with the actual user ID.
      const folderName = "Model Parameters"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(userId, file.path, folderName);
        console.log("Model Parameters files uploaded successfully");
      });
    } catch (error) {
      console.error("Error uploading Model Parameters files:", error);
    }
  };

  const handleCostFunctionsDrop = (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        console.error("No file selected");
        return;
      }

      const userId = "USER_ID"; // Replace with the actual user ID.
      const folderName = "Cost Functions"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(userId, file.path, folderName);
        console.log("Cost Functions files uploaded successfully");
      });
    } catch (error) {
      console.error("Error uploading Cost Functions files:", error);
    }
  };

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  async function handleFileUpload() {
    try {
      if (!selectedFile) {
        console.error("No file selected");
        return;
      }
      const userId = "USER_ID"; // Replace with the actual user ID.
      const folderName = "Reference Data"; // Replace with the desired folder name.

      uploadFile(userId, selectedFile, folderName);
      console.log("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }

  useEffect(() => {
    setNumRows(initialNumRows);
  }, [initialNumRows]);

  return (
    <Container alignment={numRows}>
      <TableContainer>
        {numRows === 0 ? (
          <ContinueButton />
        ) : (
          <DataDescription numRows={numRows} />
        )}
      </TableContainer>
      <div>
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload File</button>
      </div>
      <InsertDataContainer>
        <DataContainers
          onDrop={handleReferenceDataDrop}
          text='Reference Data'
          color={"#2196f3"}
        />
        <DataContainers
          onDrop={handleModelNetlistDrop}
          text='Model Netlist'
          color={"#4caf50"}
        />
        <DataContainers
          onDrop={handleModelParametersDrop}
          text='Model Parameters'
          color={"#ff9800"}
        />
        <DataContainers
          onDrop={handleCostFunctionsDrop}
          text='Cost Function'
          color={"#9c27b0"}
        />
        <ContinueButton show={numRows} />
      </InsertDataContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(p) =>
    p.alignment !== 0 ? "space-between" : "space-evenly"};
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
