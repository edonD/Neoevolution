import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import CardAdd from "../../GUI/NewModel/CardAdd";
import CardForModels from "../../Account/Billing/Card/CardForModels";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanAllStatesModel,
  selectedModels,
  setNewModeltItem,
} from "../../../store/slices/modelListSlice";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { currentProject } from "../../../store/slices/projectListSlice";
import {
  listFolders,
  listModelFolders,
} from "../../Storage/UploadFileFunctions";
import InsertData from "../InsertData/InsertData";

function NewModel() {
  const [selectedItem, setSelectedItem] = useState(0); // Add new state variable

  const [path, setPath] = useState("");
  const [loading, setLoading] = useState(true);

  const modelList = useSelector(selectedModels);
  const dispatch = useDispatch();
  const userNameId = useSelector(selectUserNameId);
  const currentProjectName = useSelector(currentProject);
  // const projectsList = useSelector(selectedProjects);

  const handleListItemClick = (index) => {
    setSelectedItem(index);
  };

  useEffect(() => {
    setPath(`${userNameId}/${currentProjectName}/`);
  }, [userNameId]);

  useEffect(() => {
    if (path) {
      setLoading(true);
      dispatch(cleanAllStatesModel());
      async function getFoldersInRootDirectory() {
        try {
          const folders = await listModelFolders(path);

          folders.map((folder) => {
            dispatch(setNewModeltItem(folder));
          });
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
      }

      getFoldersInRootDirectory();
    }
    // setLoading(false);
  }, [path, dispatch]);

  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid container spacing={2} columnSpacing={2}>
          <Grid item xs={12} md={9} lg={9}>
            <InsertData />
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <CardAdd />
          </Grid>
          {modelList &&
            modelList
              .slice() // Create a shallow copy of the array to avoid modifying the original
              .sort((a, b) => a.value - b.value)
              .map(
                (project) =>
                  project.name !== "config.txt" && (
                    <Grid item xs={12} md={12} xl={6} key={project}>
                      <CardForModels
                        name={project.name}
                        // date={project.date}
                        // time={project.time}
                        // key={project.value}
                        // onData={onData}
                        // state={"In Process"}
                      />
                    </Grid>
                  )
              )}
        </Grid>
      </Form>
    </WrapperForm>
  );
}

const Headerh2 = styled.h3`
  font-size: 18px;
  font-weight: 200;
  @media screen and (max-width: 700px) {
    font-weight: 400;
    font-size: 20px;
  }
`;

const WrapperForm = styled.div`
  width: 90%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 15px;
  margin: 20px;
  overflow: hidden;
  background-color: transparent;
  @media screen and (max-width: 1400px), screen and (max-height: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;

    background-color: red;
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
  }
`;
const Form = styled.form`
  background: transparent;
  height: 100%;
  width: 100%;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 20px 10px 20px;

  position: relative;
  @media screen and (max-width: 600px) {
    width: 100%;
    background-color: white;
  }
  @media screen and (max-height: 780px) {
    height: 100%;
    background-color: pink;
  }
`;

export default NewModel;
