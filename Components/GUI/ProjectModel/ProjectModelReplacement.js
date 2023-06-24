import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

import UploadNetlistButton from "../UploadButton/UploadNetlistButton";
import { v4 as uuid } from "uuid";

import CardForFiles from "../../Account/Billing/Card/CardForFiles";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNetlistItems,
  setModelItems,
  removeModelItem,
  selectedModel,
  setModel,
  cleanAllState,
} from "../../../store/slices/modelNetlistSlice";
import {
  selectTestbenchItems,
  setTestbenchItems,
  removeTestbenchItem,
  selectedTestbench,
  setTestbench,
  cleanAllTestbenchesState,
} from "../../../store/slices/testbenchesSlice";

import { updateTestbenchItem } from "../../../store/slices/headerIconsSlice";
import { useEffect } from "react";
import { listFiles } from "../../Storage/UploadFileFunctions";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { currentProject } from "../../../store/slices/projectListSlice";
import { currentModel } from "../../../store/slices/modelListSlice";

import UploadTestbenchButton from "../Models/UploadTestbenchButton";

function ProjectModelReplacement() {
  const items = useSelector(selectNetlistItems);
  const testbenchItems = useSelector(selectTestbenchItems);
  const usernameID = useSelector(selectUserNameId);
  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;

  const subPath = `${userId}/${projectId}/${modelId}`;

  const ModelNetlistlink = `${subPath}/Model Netlist`;
  const Testbenchestlink = `${subPath}/Testbenches`;

  const Testbench = useSelector(selectedTestbench);
  const Model = useSelector(selectedModel);
  console.log("Model", Model);

  const dispatch = useDispatch();

  const handleUpdateHeaderIcon = (label, newValue) => {
    dispatch(updateTestbenchItem({ label, value: newValue }));
  };
  const handleTestbenchCallback = (item) => {
    dispatch(removeTestbenchItem(item));
    dispatch(setTestbench(null));
  };

  const handleTestbenchClearCallback = () => {
    dispatch(setTestbench(null));
  };

  const handleModelClearCallback = () => {
    dispatch(setModel(null));
  };

  const handleModelNetlistCallback = (item) => {
    dispatch(removeModelItem(item));
    dispatch(setModel(null));
  };

  const [selectedTBButtonIndex, setSelectedTBButtonIndex] = useState(null);
  const [selectedMDButtonIndex, setSelectedMDButtonIndex] = useState(null);

  const handleModelButtonClick = (index, label) => {
    setSelectedMDButtonIndex(index);
    dispatch(setModel(label));
    console.log("Model", label);
  };

  const handleTBButtonClick = (index, label) => {
    setSelectedTBButtonIndex(index);
    dispatch(setTestbench(label));
  };

  useEffect(() => {
    // handleUpdateHeaderIcon("Model", "empty");
    const fetchNetlistData = async () => {
      try {
        dispatch(cleanAllState());
        const files = await listFiles(ModelNetlistlink);
        console.log(files); // Do something with the files array
        files.map((file) => {
          const result = file.key.replace(/.*\//, "");

          dispatch(setModelItems(result));
        });
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchNetlistData();
    dispatch(cleanAllTestbenchesState());
    const fetchTestbenchData = async () => {
      try {
        const files = await listFiles(Testbenchestlink);
        console.log(files); // Do something with the files array
        files.map((file) => {
          const result = file.key.replace(/.*\//, "");

          dispatch(setTestbenchItems(result));
        });
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchTestbenchData();
  }, []);

  useEffect(() => {
    if (Testbench !== null && Model !== null) {
      handleUpdateHeaderIcon("Model", "Full");
    } else {
      handleUpdateHeaderIcon("Model", "empty");
    }
  }, [Testbench, Model]);

  return (
    <WrapperForm>
      <Grid container>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <CardContainer>
            <Header>
              <UploadButtonContainer>
                <h1>Select Netlist</h1>
              </UploadButtonContainer>
              <UploadButtonContainer>
                <UploadNetlistButton />
              </UploadButtonContainer>
            </Header>

            {items.map((item) => (
              // <Grid item xs={12} md={12} lg={12} xl={12} key={item}>
              <CardForFiles
                type='Model'
                key={item.key}
                item={item.label}
                callback={handleModelNetlistCallback}
                clearCallback={handleModelClearCallback}
                isSelected={Model === item.label}
                onClick={() => handleModelButtonClick(item.key, item.label)}
              />
            ))}
          </CardContainer>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <CardContainer>
            <Header>
              <UploadButtonContainer>
                <h1>Select Testbench</h1>
              </UploadButtonContainer>
              <UploadButtonContainer>
                <UploadTestbenchButton />
              </UploadButtonContainer>
            </Header>
            {testbenchItems.map((item) => (
              // <Grid item xs={12} md={12} lg={12} xl={12} key={item}>

              <CardForFiles
                type='Testbench'
                key={item.key}
                item={item.label}
                callback={handleTestbenchCallback}
                clearCallback={handleTestbenchClearCallback}
                isSelected={Testbench === item.label}
                onClick={() => handleTBButtonClick(item.key, item.label)}
              />
              // </Grid>
            ))}
          </CardContainer>
        </Grid>
      </Grid>
    </WrapperForm>
  );
}

const WrapperForm = styled.div`
  width: 90%;
  /* min-height: 10vh; */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-top: 0px;
  align-items: center;
  /* border: 1px solid black; */
  /* border-radius: 15px; */
  margin-top: 20px;

  background-color: white;

  /* @media screen and (max-width: 1200px), screen and (max-height: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;

    background-color: white;
    height: 100%;
  }
  @media screen and (max-height: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;
    height: 100%;
  }
  h1 {
    margin: 0px;
  } */
`;
const UploadButtonContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin: 0px;
    width: 100%;
    flex-direction: column;
  }
`;
const CardContainer = styled.div`
  width: 95%;
  height: fit-content;
  /* max-height: 50vh; */
  overflow: auto;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 15px;
`;

const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ededed;
  h1 {
    font-size: 18px;

    color: black;
    font-weight: 200;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }
`;

export default ProjectModelReplacement;
