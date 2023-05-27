import React from "react";
import Cards from "react-credit-cards";
import { useState } from "react";
import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import { Input } from "@mui/material";
import CardNumberMask from "../MaskedInputs/CardNumberMask";
import CardExpireMask from "../MaskedInputs/CardExpireMask";
import CardCVCMask from "../MaskedInputs/CardCVCMask";

const Card = () => {
  const [payment, setPayment] = useState("CC");
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <PaymentForm>
      <StyledCard>
        <Cards
          cvc={data.cvc}
          expiry={data.expiry}
          focus={data.focus}
          name={data.name}
          number={data.number}
        />
      </StyledCard>
      <Action action=''>
        <InputStyled
          type='text'
          name='name'
          placeholder='Your Name'
          onChange={handleInputChange}
        />
        <InputStyled
          name='number'
          inputComponent={CardNumberMask}
          placeholder='Card Number'
          onChange={handleInputChange}
        />
        <InputStyled
          name='expiry'
          inputComponent={CardExpireMask}
          placeholder='Expire Date'
          onChange={handleInputChange}
          variant='contained'
        />

        <InputStyled
          type='password'
          name='cvc'
          inputComponent={CardCVCMask}
          placeholder='CVC'
          inputProps={{ pattern: "d{3,4}" }}
          onChange={handleInputChange}
        />
      </Action>
    </PaymentForm>
  );
};

const PaymentForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const StyledCard = styled.div`
  margin-bottom: 20px;
  @media screen and (max-width: 1700px) {
    padding: 0px 10px 10px 10px;
    width: 100%;
  }
  @media screen and (max-height: 680px) {
  }
`;

const Action = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 1500px) {
    width: 80%;
  }
`;
const InputStyled = styled(Input)`
  background: white;
  padding: 5px;
  width: 100%;
  border: none;
  /* border-radius: 4px; */
  /* border: 2px 0px 2px 2px solid #999999; */
  margin-bottom: 30px;
  font-size: 12px;
  color: rgb(0, 0, 0);
  outline: none;
  font-weight: 300;
`;

export default Card;
