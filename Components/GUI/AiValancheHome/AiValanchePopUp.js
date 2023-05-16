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
import { BsPlusCircleFill } from "react-icons/bs";
import Link from "next/link";
import { background } from "@chakra-ui/react";

export default function AiValanchePopUp({ onData, ButtonText, icon, size }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FormButton
        className='blue-white-lightblue'
        onClick={handleClickOpen}
        size={size}
      >
        {icon ? (
          <BsPlusCircleFill
            size={15}
            style={{ marginRight: "10px", background: "transparent" }}
          />
        ) : (
          <></>
        )}
        {ButtonText}
      </FormButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a Project</DialogTitle>
        <DialogContent>
          <AiValanchePopUpInformation />
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>

          <SubmitButton
            onClick={() => {
              const increment = 1;
              onData(increment);
              handleClose();
            }}
          >
            Create
          </SubmitButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const FormButton = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* font-size: 35px; */
  font-size: ${(props) => `${props.size}px`};

  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px 60px 10px 60px;
  transition: background-color 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  /* font-size: 20px; */
  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
    font-size: 12px;
    padding: 5px 10px 5px 10px;
  }
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
