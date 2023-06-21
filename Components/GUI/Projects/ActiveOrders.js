import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import CardForProjects from "../../Account/Billing/Card/CardForProjects";
import CardAdd from "./CardAdd";

function ActiveOrders({ projects, onData }) {
  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid container spacing={2} columnSpacing={2}>
          <Grid item xs={12}>
            <Headerh2>Projects </Headerh2>
          </Grid>

          {projects &&
            projects
              .slice() // Create a shallow copy of the array to avoid modifying the original
              .sort((a, b) => a.value - b.value)
              .map((project) => (
                <Grid item xs={12} md={12} xl={6} key={project}>
                  <CardForProjects
                    name={project.name}
                    date={project.date}
                    time={project.time}
                    onData={onData}
                    state={"In Process"}
                  />
                </Grid>
              ))}
          <Grid
            item
            xs={12}
            md={12}
            xl={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardAdd />
          </Grid>
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

const FormButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 320px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #3f9cf3;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #388ddb;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export default ActiveOrders;
