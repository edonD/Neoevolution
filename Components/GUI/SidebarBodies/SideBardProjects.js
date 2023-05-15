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
import { BsPerson } from "react-icons/bs";
import { AiFillCreditCard, AiFillFolderOpen } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";

import Link from "next/link";
import Plots from "../Plots";
import ActiveOrders from "../Projects/ActiveOrders";

function SidebarProjects() {
  return (
    <Container>
      <WrapperDescription>
        <AccountHeader>
          <PersonalContent>
            <ImageContainer>
              <h2>AI</h2>
            </ImageContainer>
          </PersonalContent>
          <h2>Valanche</h2>
        </AccountHeader>
        <AccountBody>
          <ListItemMain>
            <Icon>
              <AiFillFolderOpen size={30} />
            </Icon>
            <h1>Projects</h1>
          </ListItemMain>

          <Link href='/aivalanche/results' passHref>
            <ListItem>
              <Icon>
                <BiLoaderCircle color={"red"} size={30} />
              </Icon>
              <h1>Running</h1>
            </ListItem>
          </Link>
        </AccountBody>
      </WrapperDescription>
      <MainView>
        <ActiveOrders />
      </MainView>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* margin-top: 80px; */
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  background: white; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */
`;

const AccountHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  user-select: none;
  background-color: transparent;
  h2 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 16px;
    margin-left: 5px;
  }
  h1 {
    width: 100%;
    height: 100%;
    position: relative;
    color: #303030;
    font-size: 10px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    margin: 5px;
    @media screen and (max-width: 400px) {
      width: 70%;
    }
  }
`;

const PersonalContent = styled.div`
  padding: 0;
  width: 36px;
  height: 36px;

  overflow: hidden;
  position: relative;

  user-select: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  background-color: transparent;
  &:hover {
    color: #119bbd;
  }
  /* @media (min-width: 1000px) {
        display: none;
      }
      &:hover {
        color: #119bbd;
      } */
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d4e4ff;
  /* background-color: transparent; */
  position: relative;
  h2 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 22px;
    margin: 0px;
  }
`;

const AccountBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f3f8;
  h2 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 16px;
  }
  h1 {
    width: 100%;
    color: #303030;
    font-size: 10px;
    font-weight: 700;
    margin: 5px;
    @media screen and (max-width: 400px) {
      width: 70%;
    }
  }
`;
const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MainView = styled.div`
  width: calc(100% - 300px);
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: row;

  justify-content: flex-start;
  padding-top: 0px;
  align-items: center;

  @media screen and (max-width: 1200px), screen and (max-height: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px;

    height: 100%;
  }
  @media screen and (max-height: 1600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
const ListItemMain = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: green;
  padding: 5px;
  background-color: white;
  margin: 5px 0px 5px 0px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: #e2e2e6;
  }
  h1 {
    font-size: 14px;
    color: black;
    font-weight: 200;
  }
`;
const ListItem = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: green;
  padding: 5px;
  background-color: transparent;
  margin: 5px 0px 5px 0px;
  border-radius: 4px;
  cursor: pointer;
  :hover {
    background: #e2e2e6;
  }
  h1 {
    font-size: 14px;
    color: black;
    font-weight: 200;
  }
`;
const WrapperDescription = styled.div`
  width: 300px;
  height: calc(100vh - 80px);
  /* height: 100%; */
  /* position: relative; */
  display: flex;
  flex-direction: column;
  background-color: #f3f3f8;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1600px) {
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
const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: transparent;
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

export default SidebarProjects;
