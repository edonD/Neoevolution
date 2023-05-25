import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Button } from "@mui/material";
import DropdownMenu from "../DropdownMenu";

import CardForModelSelection from "../../Account/Billing/Card/CardForModelSelection";

function ModelsGrid({ projects, onData }) {
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
            <DropdownMenu
              items={[
                {
                  label: "Model",
                  value: "option1",
                },
                {
                  label: "NMOS-BSIM4",
                  value: "option2",
                },
                { label: "PMOS-BSIM4", value: "option3" },
                { label: "PMOS-HiSIM", value: "option4" },
                { label: "NMOS-HiSIM", value: "option5" },
                { label: "Diode", value: "option6" },
                { label: "Resistor", value: "option7" },
                { label: "Capacitor", value: "option8" },
                { label: "PMOS-BSIM4", value: "option9" },
                { label: "PMOS-HiSIM", value: "option10" },
                { label: "NMOS-HiSIM", value: "option11" },
                { label: "Diode", value: "option12" },
                { label: "Capacitor", value: "option13" },
                { label: "Resistor", value: "option14" },
              ]}
            />
          </Grid>
          <Grid item xs={6}>
            <DropdownMenu
              items={[
                {
                  label: "Testbenches",
                  value: "option1",
                },
                {
                  label: "NMOS-BSIM4",
                  value: "option2",
                },
                { label: "PMOS-BSIM4", value: "option3" },
                { label: "PMOS-HiSIM", value: "option4" },
                { label: "NMOS-HiSIM", value: "option5" },
                { label: "Diode", value: "option6" },
                { label: "Resistor", value: "option7" },
                { label: "Capacitor", value: "option8" },
                { label: "PMOS-BSIM4", value: "option9" },
                { label: "PMOS-HiSIM", value: "option10" },
                { label: "NMOS-HiSIM", value: "option11" },
                { label: "Diode", value: "option12" },
                { label: "Capacitor", value: "option13" },
                { label: "Resistor", value: "option14" },
              ]}
            />
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
