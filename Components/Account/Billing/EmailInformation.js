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

function EmailInformation() {
  const [email, setEmail] = useState("");

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
            <Headerh2>Email</Headerh2>
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email'
              name='email'
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <FormButton
              typeu='submit'
              fullWidth
              variant='contained'
              color='primary'
            >
              Update Email
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

const HeaderP = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
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
  border-bottom: 1px solid black;
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

export default EmailInformation;
