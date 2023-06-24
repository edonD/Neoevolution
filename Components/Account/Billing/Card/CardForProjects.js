import React from "react";
import { InputBase, TextField } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProjectItem,
  setCurrentProject,
} from "../../../../store/slices/projectListSlice";
import { deleteFileFromStorage } from "../../../Storage/UploadFileFunctions";
import { selectUserNameId } from "../../../../store/slices/userSlice";

function ConditionalLink({ href, editing, children }) {
  if (editing) {
    return <div>{children}</div>;
  }

  return <Link href={href}>{children}</Link>;
}

function CardForProjects({ name, state, onData, date, time, key }) {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const dispatch = useDispatch();
  const usernameId = useSelector(selectUserNameId);
  const path = `${usernameId}/${name}`;

  const handleNameClick = () => {
    setEditing(true);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    dispatch(removeProjectItem(name));
    deleteFileFromStorage(path);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleNameBlur = () => {
    if (editedName.trim() === "") {
      setEditedName("empty");
    }
    setEditing(false);
  };

  const handleNameKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNameBlur();
    }
  };

  const handleNameInputClick = (e) => {
    e.stopPropagation();
    setEditing(true);
  };

  const setProjectName = (name) => {
    dispatch(setCurrentProject(name));
  };

  return (
    <ConditionalLink
      href={`/projects/${encodeURIComponent(name)}`}
      editing={editing}
    >
      <Card
        onClick={() => {
          setProjectName(name);
        }}
      >
        <Header>
          <ImageContainer>
            <Image
              src='/images/gggrain.svg'
              layout='fill'
              objectFit='contain'
              alt='brain'
            />
          </ImageContainer>
        </Header>
        <Box>
          <CardContent>
            <ListItem>
              {editing ? (
                <NameInput
                  color='secondary'
                  value={editedName}
                  onChange={handleNameChange}
                  onBlur={handleNameBlur}
                  onClick={handleNameInputClick}
                  onKeyDown={handleNameKeyPress}
                />
              ) : (
                <NameText onClick={handleNameInputClick}>{editedName}</NameText>
              )}
            </ListItem>
            {/* <ListItem state={state}>
              <h2>{state}</h2>
            </ListItem> */}
          </CardContent>
          <CardContent>
            <ListItemEnd style={{ justifyContent: "center" }}>
              {/* <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }} 
              >*/}
              <h2>Updated at</h2>
              <h1>{date} </h1>
              {/* </div> */}
              <h1>{time}</h1>
            </ListItemEnd>

            <ListItemEnd>
              <Button onClick={handleDeleteClick} className='red-white-black'>
                <p>Delete Project</p>
              </Button>
            </ListItemEnd>
          </CardContent>
        </Box>
      </Card>
    </ConditionalLink>
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
const Button = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px;
  transition: background-color 0.2s ease;

  margin-bottom: 20px;
  p {
    margin: 0;
    user-select: none;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.red-white-black {
    background-color: #d92d20;
    color: white;
    border: 1px solid #d92d20;
  }

  &.red-white-black:hover {
    color: #d92d20;
    background-color: white;
    border: 1px solid #d92d20;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 220px;
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* border: 1px solid black; */
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.07);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 150px;
  }
  :hover {
    background-color: #f3f3f8;
  }
`;
const Box = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 200px;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const CardContent = styled.div`
  width: 45%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 10px;
`;

const ListItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: transparent;
  padding-top: 20px;
  background-color: transparent;
  margin: 0px 0px 0px 0px;
  color: black;

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

const ListItemEnd = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
    color: #1961ff;
    font-weight: 200;
    margin-right: 10px;
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

const NameInput = styled(InputBase)`
  && {
    margin: 0;
    padding: 0;
    font-size: 24px;
    font-weight: 300;
    background-color: white;
  }
`;

const NameText = styled.h3`
  cursor: pointer;
  padding: 10px 0px;
  &:hover {
    text-decoration: underline;
  }
`;

export default CardForProjects;
