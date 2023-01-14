import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";

import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

function PersonalInformation() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [details, setDetails] = useState("");
  return (
    <WrapperForm>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Grid container spacing={2} rowSpacing={2}>
          <Grid item xs={12} md={12}>
            <Headerh2>Account</Headerh2>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='name'
              label='First Name'
              name='name'
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='last name'
              label='Last Name'
              name='last name'
              value={lastname}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              value={company}
              name='Company'
              label='Company'
              type='Company'
              id='Company'
              onChange={(event) => {
                setCompany(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              value={country}
              name='Country'
              label='Country'
              type='Country'
              id='Country'
              onChange={(event) => {
                setCountry(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='jobRole'
              label='Job role'
              name='jobRole'
              value={jobrole}
              onChange={(event) => {
                setJobrole(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              value={jobtitle}
              name='jobTitle'
              label='Job title'
              id='jobTitle'
              onChange={(event) => {
                setJobtitle(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <FormButton
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
            >
              Update Account Information
            </FormButton>
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
  height: fit-content;
  display: flex;
  flex-direction: column;

  justify-content: center;
  padding-top: 0px;
  align-items: center;
  border: 1px solid #ededed;
  border-radius: 15px;
  margin: 20px;
  overflow: hidden;
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
  background-color: transparent;
  background: transparent;
`;
const Form = styled.form`
  background: white;
  height: 100%;
  width: 100%;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 20px 10px 20px;

  /* box-shadow: 0 0 16px rgb(0, 0, 0, 10%); */
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

export default PersonalInformation;
