import * as React from "react";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import styled from "styled-components";
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function FormDialog({ who, what }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <BiographyContainer onClick={handleClickOpen}>
        <span>Biography</span>
      </BiographyContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{who}</DialogTitle>
        <DialogContent>
          <p>{what}</p>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose}>Close</CancelButton>
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

const BiographyContainer = styled.div`
  width: 128px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background: transparent;
  margin: 5px;
  color: #2196f3;
  background-color: #fff;
  border: 1px solid #2196f3;
  border-radius: 4px;
  :hover {
    background-color: #2196f3;
    color: #fff;
    border: 1px solid #2196f3;
  }
  span {
    font-size: 17px;
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
    /* global 92%+ browsers support */
    background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
    border: none;
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

    &:hover {
      background-color: #f3f3f8;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
