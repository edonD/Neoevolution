import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AiValanchePopUpInformation from "./AiValanchePopUpInformation";
import styled from "styled-components";
import { MdOutlineBusinessCenter } from "react-icons/md";
import Link from "next/link";

export default function AiValanchePopUp() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormButton className='blue-white-lightblue' onClick={handleClickOpen}>
        Create
      </FormButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a Project</DialogTitle>
        <DialogContent>
          <AiValanchePopUpInformation />
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <Link href='/aivalanche/optimization/' passHref>
            <SubmitButton>Create</SubmitButton>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const CardContent = styled.div`
  width: calc(100%-150px);
  height: 100px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 10px;
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

  //cursor: pointer;

  h3 {
    font-size: 14px;
    color: #a2a2a6;
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 650px) {
      font-size: 12px;
    }
  }
  h1 {
    color: black;
    font-size: 22px;
    font-weight: 200;
    margin: 0px;
    @media screen and (max-width: 650px) {
      font-size: 18px;
    }
  }
`;
const Container = styled.div`
  width: fit-content;
  height: fit-content;

  background-color: white;
  color: white;

  cursor: pointer;
`;

const FormButton = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 35px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px 60px 10px 60px;
  transition: background-color 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.gray-white-black {
    background-color: #349a77;
    color: white;
    border: 1px solid #349a77;
  }

  &.gray-white-black:hover {
    color: #349a77;
    background-color: white;
    border: 1px solid #349a77;
  }

  &.black-gray-white {
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
  }

  &.black-gray-white:hover {
    color: #333;
    background-color: #fff;
    border: 1px solid #333;
  }

  &.blue-white-lightblue {
    width: 100%;
    background-color: #2196f3;
    color: #fff;
    border: 1px solid #2196f3;
  }

  &.blue-white-lightblue:hover {
    color: #2196f3;
    background-color: #fff;
    border: 1px solid #2196f3;
  }
`;
const SubmitButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 150px;
    height: 40px;
    background: rgb(26, 64, 116);
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    color: white;
    cursor: pointer;

    &:hover {
      background: linear-gradient(90deg, #1cb5e0 0%, #000851 50%);
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const CancelButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 150px;
    height: 40px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid #efefef;
    margin-right: 10px;
    &:hover {
      background-color: #f3f3f8;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
