import React from "react";
import { useState } from "react";

import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import { Button } from "@mui/material";
import Image from "next/image";
import { BsCreditCard2Front } from "react-icons/bs";
import CC from "./CC";

const Card = () => {
  const [payment, setPayment] = useState("CC");

  return (
    <Container>
      <PaymentForm>
        <Body>
          <CC />
        </Body>
      </PaymentForm>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  height: fit-content;
  justify-content: space-around;
  flex-direction: column;
  background-image: white;

  @media screen and (max-width: 1400px) {
    width: 320px;
  }
`;

const Body = styled.div`
  height: 520px;
  width: 100%;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

const PaymentForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export default Card;
