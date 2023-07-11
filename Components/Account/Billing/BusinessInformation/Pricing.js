import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CompanyInformation from "./CompanyInformation";
import styled from "styled-components";
import { BsCurrencyEuro } from "react-icons/bs";
import { useRouter } from "next/router";

export default function Pricing() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClickOpen = () => {
    router.push("/Pricing");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <FormButton variant='text' onClick={handleClickOpen}>
        <BsCurrencyEuro size={30} />
      </FormButton>
      <CardContent onClick={handleClickOpen}>
        <ListItem>
          <h1>Pricing</h1>
        </ListItem>
        <ListItem>
          <h3>Check different pricing schemes</h3>
        </ListItem>
      </CardContent>
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
    /* global 92%+ browsers support */
    background: hsla(165, 60%, 11%, 1);

    background: linear-gradient(
      180deg,
      hsla(165, 60%, 11%, 1) 0%,
      hsla(149, 54%, 31%, 1) 100%
    );

    background: -moz-linear-gradient(
      180deg,
      hsla(165, 60%, 11%, 1) 0%,
      hsla(149, 54%, 31%, 1) 100%
    );

    background: -webkit-linear-gradient(
      180deg,
      hsla(165, 60%, 11%, 1) 0%,
      hsla(149, 54%, 31%, 1) 100%
    );
    border: none;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #a88ddb;
    }
  }
  @media screen and (max-width: 400px) {
    font-size: 12px;
  }
`;
