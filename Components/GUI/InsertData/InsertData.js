import React from "react";
import styled from "styled-components";
import DataDescription from "./DataDescription";
import DataContainers from "./DataContainers";
import ContinueButton from "./ContinueButton";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { uploadFile } from "../../Storage/UploadFileFunctions";
import { useDispatch, useSelector } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { currentProject } from "../../../store/slices/projectListSlice";
import { currentModel } from "../../../store/slices/modelListSlice";

function InsertData() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [uploadReferenceDataProgress, setUploadReferenceDataProgress] =
    useState(0);
  const [uploadModelNetlistProgress, setUploadModelNetlistProgress] =
    useState(0);
  const [uploadTestbenchesProgress, setUploadTestbenchesProgress] = useState(0);
  const [uploadModelParametersProgress, setUploadModelParametersProgress] =
    useState(0);
  const [uploadCostFunctionProgress, setUploadCostFunctionProgress] =
    useState(0);

  const [uploadReferenceDataDone, setUploadReferenceDataDone] = useState(false);
  const [uploadModelNetlistDone, setUploadModelNetlistDone] = useState(false);
  const [uploadTestbenchesDone, setUploadTestbenchesDone] = useState(false);
  const [uploadModelParametersDone, setUploadModelParametersDone] =
    useState(false);
  const [uploadCostFunctionDone, setUploadCostFunctionDone] = useState(false);

  const usernameID = useSelector(selectUserNameId);
  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const numRowsQueryParam = router.query.numRows;
  const initialNumRows = numRowsQueryParam
    ? parseInt(numRowsQueryParam, 10)
    : 0;
  const [numRows, setNumRows] = useState(initialNumRows);

  const handleUploadReferenceDataComplete = () => {
    setUploadReferenceDataDone(true);
  };
  const handleUploadModelNetlistComplete = () => {
    setUploadModelNetlistDone(true);
  };

  const handleUploadTestbenchesComplete = () => {
    setUploadTestbenchesDone(true);
  };

  const handleUploadModelParametersComplete = () => {
    setUploadModelParametersDone(true);
  };

  const handleUploadCostFunctionComplete = () => {
    setUploadCostFunctionDone(true);
  };

  const handleRegerenceDataProgressChange = (progress) => {
    setUploadReferenceDataProgress(0);
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    setUploadReferenceDataProgress(percentage);
    setUploadReferenceDataDone(false);
  };
  const handleModelNetlistProgressChange = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    setUploadModelNetlistProgress(percentage);
    setUploadModelNetlistDone(false);
  };

  const handleTestbenchesProgressChange = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    setUploadTestbenchesProgress(percentage);
    setUploadTestbenchesDone(false);
  };

  const handleModelParametersProgressChange = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    setUploadModelParametersProgress(percentage);
    setUploadModelParametersDone(false);
  };
  const handleCostFunctionProgressChange = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    setUploadCostFunctionProgress(percentage);
    setUploadCostFunctionDone(false);
  };
  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;
  const path = `${userId}/${projectId}/${modelId}`;
  const handleReferenceDataDrop = (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        console.error("No file selected");
        return;
      }

      const folderName = "Reference Data"; // Replace with the desired folder name.
      acceptedFiles.forEach((file) => {
        uploadFile(
          path,
          file,
          folderName,
          handleRegerenceDataProgressChange,
          handleUploadReferenceDataComplete
        );
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

      const userId = usernameID; // Replace with the actual user ID.
      const folderName = "Model Netlist"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(
          path,
          file,
          folderName,
          handleModelNetlistProgressChange,
          handleUploadModelNetlistComplete
        );
        // console.log("Model Netlist files uploaded successfully");
      });
    } catch (error) {
      console.error("Error uploading Model Netlist files:", error);
    }
  };

  const handleTestbenchesDrop = (acceptedFiles) => {
    try {
      if (acceptedFiles.length === 0) {
        console.error("No file selected");
        return;
      }

      const userId = usernameID; // Replace with the actual user ID.
      const folderName = "Testbenches"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(
          path,
          file,
          folderName,
          handleTestbenchesProgressChange,
          handleUploadTestbenchesComplete
        );
        // console.log("Model Netlist files uploaded successfully");
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

      const userId = usernameID; // Replace with the actual user ID.
      const folderName = "Model Parameters"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(
          path,
          file,
          folderName,
          handleModelParametersProgressChange,
          handleUploadModelParametersComplete
        );
        // console.log("Model Parameters files uploaded successfully");
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

      const userId = usernameID; // Replace with the actual user ID.
      const folderName = "Cost Functions"; // Replace with the desired folder name.

      acceptedFiles.forEach((file) => {
        uploadFile(
          path,
          file,
          folderName,
          handleCostFunctionProgressChange,
          handleUploadCostFunctionComplete
        );
        // console.log("Cost Functions files uploaded successfully");
      });
    } catch (error) {
      console.error("Error uploading Cost Functions files:", error);
    }
  };

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

      <InsertDataContainer>
        <DataContainers
          onDrop={handleReferenceDataDrop}
          text='Reference Data'
          color={"#2196f3"}
          value={uploadReferenceDataProgress}
          done={uploadReferenceDataDone}
        />
        <DataContainers
          onDrop={handleModelNetlistDrop}
          text='Model Netlist'
          color={"#4caf50"}
          value={uploadModelNetlistProgress}
          done={uploadModelNetlistDone}
        />
        <DataContainers
          onDrop={handleTestbenchesDrop}
          text='Testbenches'
          color={"#4caf50"}
          value={uploadTestbenchesProgress}
          done={uploadTestbenchesDone}
        />
        <DataContainers
          onDrop={handleModelParametersDrop}
          text='Model Parameters'
          color={"#ff9800"}
          value={uploadModelParametersProgress}
          done={uploadModelParametersDone}
        />
        <DataContainers
          onDrop={handleCostFunctionsDrop}
          text='Cost Function'
          color={"#9c27b0"}
          value={uploadCostFunctionProgress}
          done={uploadCostFunctionDone}
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
