import React from "react";
import { GiSwirledShell } from "react-icons/gi";
import styled from "styled-components";
import Image from "next/image";
import { BiLoaderCircle } from "react-icons/bi";
import { RiCalendar2Line } from "react-icons/ri";
import { AiOutlineDownload, AiOutlineClockCircle } from "react-icons/ai";

function CardInternal({ state }) {
  return (
    <Card>
      <Header>
        <GiSwirledShell size={50} style={{ transform: "rotate(-180deg)" }} />
      </Header>
      <Box>
        <DateCardContent>
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
        </DateCardContent>
        <CardContent>
          <ListItem>
            <h3>Model Calibration</h3>
          </ListItem>
        </CardContent>
      </Box>
      <IconContainer>
        <DownloadItem>
          <IconCircle state={state}>
            {state === "Delivered" ? (
              <AiOutlineDownload size={20} />
            ) : (
              <BiLoaderCircle size={20} />
            )}
          </IconCircle>
        </DownloadItem>
      </IconContainer>
    </Card>
  );
}

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
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
  width: calc(100% - 50px);
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  width: 50px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;

const DateCardContent = styled.div`
  width: 40%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 20px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
const CardContent = styled.div`
  width: 40%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 400px) {
    width: 100%;
    background-color: transparent;
    align-items: center;
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media screen and (max-width: 400px) {
    display: none;
  }
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: blue;
  padding: 0px;
  background-color: transparent;
  margin: 0px 0px 0px 0px;
  color: black;
  //cursor: pointer;
  @media screen and (max-width: 400px) {
    justify-content: center;
  }

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
  justify-content: center;
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
