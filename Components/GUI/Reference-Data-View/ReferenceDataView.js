import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import DataGridSecond from "../DataGrids/DataGridSecond";
import Plots from "../Plots";
import { listFiles } from "../../../Components/Storage/UploadFileFunctions";
import { useEffect } from "react";
import { Auth } from "aws-amplify";

import { useDispatch } from "react-redux";
import { setItems } from "../../../store/slices/referenceDataSlice";
import { useSelector } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice";

// import { Plots } from "plotly.js";

function ReferenceDataView() {
  const usernameID = useSelector(selectUserNameId);
  console.log("Username", usernameID);
  const link = `${usernameID}/Reference Data`;
  console.log("Link", link);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const files = await listFiles(link);
        console.log(files); // Do something with the files array
        files.map((file) => {
          const result = file.key.replace(/.*\//, "");

          dispatch(setItems(result));
        });
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
        >
          <DataGridSecond />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={6}
          xl={6}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "transparent",
          }}
        >
          <Plots />
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px);
  height: 100%;
  display: flex;
  justify-content: flex-start;
`;
export default ReferenceDataView;
