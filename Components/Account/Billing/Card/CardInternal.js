import React from "react";
import {
  CardMedia,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import { BiLoaderCircle } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineDownload, AiOutlineClockCircle } from "react-icons/ai";

function CardInternal({ state }) {
  return (
    <Card>
      <Header>
        <ImageContainer>
          <Image
            src='/images/activity-img2.jpg'
            layout='fill'
            objectFit='contain'
            alt='brain'
          />
        </ImageContainer>
      </Header>
      <Box>
        <CardContent>
          <ListItem>
            <Icon>
              <RiCalendar2Line size={20} />
            </Icon>
            <h1>7 June, 2022</h1>
          </ListItem>
          <ListItem>
            <Icon>
              <AiOutlineClockCircle size={20} />
            </Icon>
            <h1>07:49 AM</h1>
          </ListItem>
        </CardContent>
        <CardContent>
          <ListItem>
            <h3>Model Calibration</h3>
          </ListItem>
          <ListItem state={state}>
            <h2>{state}</h2>
          </ListItem>
        </CardContent>
        <CardContent>
          <DownloadItem>
            <IconCircle state={state}>
              {state === "Delivered" ? (
                <AiOutlineDownload size={20} />
              ) : (
                <BiLoaderCircle size={20} />
              )}
            </IconCircle>
          </DownloadItem>
        </CardContent>
      </Box>
    </Card>
  );
}

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
  }
`;

const Card = styled.div`
  width: 80%;
  height: 120px;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;
const Box = styled.div`
  width: 80%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  width: 120px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;

const CardContent = styled.div`
  width: 40%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #909aff;
  background: transparent;
`;

const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 40px;
  /* border: 1px solid green; */

  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(check) => (check.state === "Delivered" ? "green" : " #ee7b87")};
  background: ${(check) =>
    check.state === "Delivered" ? "#ececa3" : " #fce4e7"};
  cursor: pointer;
  :hover {
    background: ${(check) =>
      check.state === "Delivered" ? "#abc32f" : " #e84b5b"};
    color: white;
  }
`;

const ListItem = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  padding: 0px;
  background-color: transparent;
  margin: 0px 0px 0px 0px;
  color: black;
  //cursor: pointer;

  h1 {
    font-size: 14px;
    color: black;
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 750px) {
      font-size: 10px;
    }
    @media screen and (max-width: 400px) {
      display: none;
    }
  }
  h2 {
    font-size: 14px;
    color: ${(check) => (check.state === "Delivered" ? "green" : "red")};
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 750px) {
      font-size: 10px;
    }
  }
  h3 {
    color: black;
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 750px) {
      font-size: 14px;
    }
  }
`;

const DownloadItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: transparent;
  padding: 0px;
  background-color: transparent;
  margin: 0px 0px 0px 0px;

  //cursor: pointer;

  h1 {
    font-size: 14px;
    color: black;
    font-weight: 200;
    margin: 0px;
  }
`;

export default CardInternal;
