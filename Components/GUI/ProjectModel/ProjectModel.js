import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

import DropdownMenu from "../DropdownMenu";

import CardForModelSelection from "../../Account/Billing/Card/CardForModelSelection";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNetlistItems,
  setTestbenchItems,
} from "../../../store/slices/modelNetlistSlice";
import { useEffect } from "react";
import { listFiles } from "../../Storage/UploadFileFunctions";
import { selectUserNameId } from "../../../store/slices/userSlice";
import {
  setModelItems,
  selectTestbenchItems,
} from "../../../store/slices/modelNetlistSlice";

function ModelsGrid() {
  const items = useSelector(selectNetlistItems);
  const testbenchItems = useSelector(selectTestbenchItems);
  const usernameID = useSelector(selectUserNameId);
  console.log("Username", usernameID);
  const ModelNetlistlink = `${usernameID}/Model Netlist`;
  const Testbenchestlink = `${usernameID}/Testbenches`;
  console.log("Link", ModelNetlistlink);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNetlistData = async () => {
      try {
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

  const modelArray = [
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
    "id_vd_vg",
  ];

  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <DropdownMenu items={items} />
          </Grid>
          <Grid item xs={6}>
            <DropdownMenu items={testbenchItems} />
          </Grid>
          {modelArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={item}>
              <CardForModelSelection name={item} />
            </Grid>
          ))}
        </Grid>
      </Form>
    </WrapperForm>
  );
}

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
  @media screen and (max-width: 1200px), screen and (max-height: 700px) {
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
    background-color: white;
  }
`;

export default ModelsGrid;
