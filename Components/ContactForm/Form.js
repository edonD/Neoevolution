import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

function ContactForm() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [jobrole, setJobrole] = useState("");
  const [jobtitle, setJobtitle] = useState("");
  const [details, setDetails] = useState("");

  return (
    <Container>
      <WrapperDescription>
        <FormHeaderDescription>
          <FormH1>Ready to get started?</FormH1>
        </FormHeaderDescription>
        <FormHeaderDescription>
          <h2>
            Let us help you deliver better outcomes by finding innovative
            solutions to your challenging business use cases. Complete the form
            to talk to sales. We're here to help you:
          </h2>
        </FormHeaderDescription>
      </WrapperDescription>
      <WrapperForm>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={12} md={12}>
              <h1>Please fill in the form</h1>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='BEmail'
                label='Please enter your business email.'
                name='BEmail'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
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
            <Grid item xs={12} md={12}>
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
            <Grid item xs={4} md={4}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label='Enterprise' />
              </FormGroup>
            </Grid>
            <Grid item xs={4} md={4}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label='Academy' />
              </FormGroup>
            </Grid>
            <Grid item xs={4} md={4}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label='Person' />
              </FormGroup>
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='Details'
                label='Details of your project'
                multiline
                rows={5}
                id='Details'
                onChange={(event) => {
                  setDetails(event.target.value);
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
                Contact Us
              </FormButton>
            </Grid>
          </Grid>
        </Form>
      </WrapperForm>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;
  align-items: center;
  overflow: hidden;
  background: white; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

const Form = styled.form`
  background: white;
  height: 92%;
  width: 550px;

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px 20px 10px 20px;
  border-radius: 4px;

  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
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

const FormHeaderDescription = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background-color: transparent;
  h2 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 26px;
  }
`;
const WrapperDescription = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding-top: 110px;

  justify-content: flex-start;
  align-items: flex-end;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const WrapperForm = styled.div`
  width: 50%;
  height: 100%;
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

const FormH1 = styled.h1`
  width: 100%;
  height: 100%;
  position: relative;
  color: #303030;
  font-size: 60px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 5px;
  @media screen and (max-width: 400px) {
    width: 70%;
  }
`;

const FormButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 100%;
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

export default ContactForm;
