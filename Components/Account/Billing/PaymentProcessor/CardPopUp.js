import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "../PaymentProcessor/Card";
import styled from "styled-components";
import { AiFillCreditCard } from "react-icons/ai";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <FormButton variant='outlined' onClick={handleClickOpen}>
        <AiFillCreditCard size={30} />
      </FormButton>
      <CardContent onClick={handleClickOpen}>
        <ListItem>
          <h1>Payment Method</h1>
        </ListItem>
        <ListItem>
          <h3>Add or change payment method</h3>
        </ListItem>
      </CardContent>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Setup payment</DialogTitle>
        <DialogContent>
          <Card />
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose}>Cancel</CancelButton>
          <SubmitButton onClick={handleClose}>Setup CARD</SubmitButton>
        </DialogActions>
      </Dialog>
    </Container>
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
  }
  h1 {
    color: black;
    font-size: 22px;
    font-weight: 200;
    margin: 0px;
  }
`;
const Container = styled.div`
  width: 450px;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  p {
    color: black;
    margin-left: 10px;
  }
  :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
const FormButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 75px;
    height: 75px;
    background: rgb(26, 64, 116);
    background: linear-gradient(
      132deg,
      rgba(59, 77, 116, 1) 0%,
      rgba(6, 20, 41, 1) 53%,
      rgba(4, 33, 77, 1) 99%
    );
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

const SubmitButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 150px;
    height: 40px;
    background: rgb(26, 64, 116);
    background: linear-gradient(
      132deg,
      rgba(59, 77, 116, 1) 0%,
      rgba(6, 20, 41, 1) 53%,
      rgba(4, 33, 77, 1) 99%
    );
    color: white;
    cursor: pointer;

    &:hover {
      background: linear-gradient(
        132deg,
        rgba(59, 77, 116, 1) 0%,
        rgba(6, 20, 41, 1) 13%,
        rgba(4, 33, 77, 1) 99%
      );
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

    &:hover {
      background-color: #f3f3f8;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
