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

function EmailInformation() {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");

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
            <Headerh2>Change Password</Headerh2>
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='Old Password'
              label='Old Password'
              name='Old Password'
              value={oldPassword}
              onChange={(event) => {
                setOldPassword(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='password'
              label='New Password'
              name='password'
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button type='submit' fullWidth className='blue-white-lightblue'>
              Change Password
            </Button>
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

const Button = styled.button`
  background-color: #1abc9c;
  border-radius: 4px;
  color: #fff;
  width: 80%;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 8px;
  font-weight: 300;
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

  @media screen and (max-width: 900px) {
    /* width: 80%; */
    font-size: 12px;
    padding: 5px;
  }

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }

  &.orange-white {
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: center;
    justify-content: center;
    /* text-transform: uppercase; */
    padding: 10px;
    /* transition: background-color 0.2s ease; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */

    background-color: #1abc9c;
    color: #fff;
    border: 1px solid #1abc9c;
    @media screen and (max-width: 900px) {
      font-size: 12px;
      padding: 10px;
    }
    /* @media screen and (max-width: 600px) {
      width: 95%;
      font-size: 8px;
      padding: 5px;
    } */
  }
  &.orange-white:hover {
    opacity: 0.8;
  }
  &.blue-white-lightblue {
    font-size: 16px;
    padding: 15px;
    width: 320px;
    background-color: #53a5fc;
    color: #fff;
    border: 1px solid #53a5fc;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  &.blue-white-lightblue:hover {
    color: #53a5fc;
    background-color: #fff;
    border: 1px solid #53a5fc;
  }
`;

export default EmailInformation;
