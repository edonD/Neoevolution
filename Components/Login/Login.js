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
import Image from "next/image";

import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      {/* <Header /> */}
      <WrapperDescription>
        <FirstContainer>
          <RowContainer>
            <ImageContainer>
              <StyledImage>
                <Image
                  src='/images/MLandAI.svg'
                  width='55px'
                  height='55px'
                  alt='MOSFET'
                  color='#235fd7'
                />
              </StyledImage>
            </ImageContainer>
            <BodyContainer>
              <BodyHeaderContainer>
                <h1>The most advanced machine learning techniques</h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>
            </BodyContainer>
          </RowContainer>
          <RowContainer>
            <ImageContainer>
              <StyledImage>
                <Image
                  src='/images/time.svg'
                  width='55px'
                  height='55px'
                  alt='MOSFET'
                  color='#235fd7'
                />
              </StyledImage>
            </ImageContainer>
            <BodyContainer>
              <BodyHeaderContainer>
                <h1>Results in 24h </h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>
            </BodyContainer>
          </RowContainer>
          <RowContainer>
            <ImageContainer>
              <StyledImage>
                <Image
                  src='/images/savings.svg'
                  width='55px'
                  height='55px'
                  alt='MOSFET'
                  color='#235fd7'
                />
              </StyledImage>
            </ImageContainer>
            <BodyContainer>
              <BodyHeaderContainer>
                <h1>Cheapest solution in the market</h1>
              </BodyHeaderContainer>
              <BodyBodyContainer>
                <p>
                  Machine learning methodology for package model extraction.
                </p>
              </BodyBodyContainer>
            </BodyContainer>
          </RowContainer>
        </FirstContainer>

        {/* <Image src='/images/wave.svg' layout='fill' alt='brain' /> */}
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
              <h1>Log in </h1>
              <p>
                or
                <a style={{ marginLeft: "5px", color: "blue" }} href='./Signup'>
                  Sign Up
                </a>
              </p>
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='BEmail'
                label='Email'
                name='BEmail'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                value={password}
                name='Password'
                label='Password'
                type='Password'
                id='Password'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <Link href='/account/information' passHref>
                <FormButton
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                >
                  Log in
                </FormButton>
              </Link>
              <a
                style={{ marginLeft: "5px", fontSize: "20px", color: "blue" }}
                href='./Forgotpassword'
              >
                {" "}
                Forgot Password
              </a>
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
  justify-content: flex-start;
  position: relative;
  align-items: center;
  background: transparent; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */
  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  height: fit-content;
  width: 550px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  overflow: hidden;
  padding: 50px 20px 10px 20px;
  background-color: white;
  border-radius: 4px;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
  position: relative;
`;

const RowContainer = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
`;

const StyledImage = styled.div`
  height: 65px;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  background-color: #f4f4f4;
  cursor: pointer;
  &:hover {
    background-color: #e9f1ff;
  }
`;

const ImageContainer = styled.div`
  height: 80%;
  width: 50px;
  user-select: none;
  color: #232331;
  margin: 30px;
`;
const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 15px;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232331;
`;
const BodyBodyContainer = styled.div`
  height: 60px;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #989898;
  p {
    font-size: 15px;
    font-weight: 200;
  }
`;
const BodyHeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #232331;
  cursor: pointer;

  h1 {
    margin: 0px;
    font-size: 22px;
    color: white;
    &:hover {
      color: white;
    }
  }
`;
const FirstContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 4;
  user-select: none;
  background-color: transparent;

  h2 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 26px;
  }
`;
const WrapperDescription = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  padding-top: 110px;
  justify-content: center;
  align-items: center;
  position: relative;

  fill: #fff;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const WrapperForm = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: white; */
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 90%;
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
    font-size: 16px;
    color: white;
    cursor: pointer;
    height: 50px;
    &:hover {
      background-color: #388ddb;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

export default Login;
