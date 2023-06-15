import React from "react";
import { TextField } from "@mui/material";

import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import UploadField from "./UploadFile";
import UploadModel from "./UploadModel";
import DropdownMenuParameters from "../DropdownMenuParameters";

function AiValanchePopUpInformation() {
  const [name, setName] = useState("");
  const [housenr, setHousenr] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [taxID, setTaxID] = useState("");
  const [ponumber, setPonumber] = useState("");
  const [email, setEmail] = useState("");

  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Grid container direction='row' spacing={2} columnSpacing={2}>
          <Grid xs={12} md={12}>
            <HeaderContainer>
              <HeaderP>Project Name</HeaderP>
            </HeaderContainer>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='Project Name'
              label=''
              name='name'
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid xs={12} md={12}>
            <HeaderContainer>
              <HeaderP>Reference Data</HeaderP>
            </HeaderContainer>
          </Grid>
          <Grid item xs={12} md={12}>
            <UploadField />
          </Grid>
          <Grid xs={12} md={12} style={{ marginTop: "20px" }}>
            <HeaderContainer>
              <HeaderP>Select model</HeaderP>
            </HeaderContainer>
          </Grid>
          <Grid xs={12} md={12}>
            <DropdownMenu
              items={[
                {
                  label: "--None--",
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
          <Grid xs={12} md={12}>
            <p style={{ paddingLeft: "20px" }}>Or</p>
          </Grid>
          <Grid item xs={12} md={12}>
            <UploadModel />
          </Grid>
        </Grid>
      </Form>
    </WrapperForm>
  );
}

const HeaderP = styled.p`
  font-size: 14px;
  font-weight: 200;
  margin-top: 0px;
  margin: 0px;
`;
const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  background-color: #f3f3f8;
`;
const WrapperForm = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;

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
  background: white;
  height: fit-content;
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

export default AiValanchePopUpInformation;
