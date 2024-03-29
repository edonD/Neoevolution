import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import CardForSelection from "../../Account/Billing/Card/CardForSelection";

function ModelsGrid({ projects, onData }) {
  const mosfetArray = [
    "BSIM4",
    "BSIM6",
    "BSIMBULK",
    "HiSIM",
    "MOSFET level 2",
    "MOSFET level 3",
    "MOSFET level 1",
  ];

  const passiveComponentArray = [
    "Capacitor level 1",
    "Diode level 1",
    "Resistor level 1",
  ];

  const customModelArray = ["Custom Model"];

  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Headerh2>Transistors </Headerh2>
          </Grid>
          {mosfetArray.map((item) => (
            <Grid item xs={12} md={4} lg={3} xl={3} key={item}>
              <CardForSelection name={item} />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Headerh2>Passive Elements </Headerh2>
          </Grid>
          {passiveComponentArray.map((item) => (
            <Grid item xs={12} md={4} lg={3} xl={3} key={item}>
              <CardForSelection name={item} />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Headerh2>Other </Headerh2>
          </Grid>
          {customModelArray.map((item) => (
            <Grid item xs={12} md={4} lg={3} xl={3} key={item}>
              <CardForSelection name={item} />
            </Grid>
          ))}
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

export default ModelsGrid;
