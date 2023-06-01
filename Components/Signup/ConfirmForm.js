import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Amplify, { Auth } from "aws-amplify";
import styled from "styled-components";
import { InputNumber } from "primereact/inputnumber";
import { InputMask } from "primereact/inputmask";

function ConfirmForm({ callbackFunction }) {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const confirm = async () => {
    try {
      await Auth.confirmSignUp("@gmail.com", confirmationCode);

      setErrorMessage("");
      handleConfirmClick();
      router.push("/login");
    } catch (err) {
      console.log("error confirming sign up", err);
      setErrorDialogVisible(true);
      setErrorMessage(err.message);
    }
  };

  const resendCode = async () => {
    setLoading(true);
    try {
      await Auth.resendSignUp(username);
      console.log("code resent successfully");
      setErrorMessage("");
      setLoading(false);
    } catch (err) {
      console.log("error resending code: ", err);
      setErrorMessage(err.message);
      setErrorDialogVisible(true);
      setLoading(false);
    }
  };

  const SubmitConfirmation = (event) => {
    event.preventDefault();
    confirm();
  };

  const handleConfirmClick = () => {
    callbackFunction("confirmState");
  };

  const router = useRouter();
  return (
    <CardContent>
      <Header>
        <Title>Verify your email</Title>
        <Subtitle>We sent an email to edonderguti@gmail.com.</Subtitle>
        <Subtitle>Please set the confirmation code.</Subtitle>
      </Header>
      <Body>
        <form
          onSubmit={SubmitConfirmation}
          style={{
            width: "100%",
          }}
        >
          {/* <FormLabel htmlFor='email2'>First Name</FormLabel> */}

          <InputMask
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
            mask='999999'
            placeholder='Confirmation Code'
            autoClear
            slotChar=''
            style={{
              padding: "1rem",
              width: "100%",
              margin: "20px 0px 20px 0px",
            }}
            required
          />

          <SignInButton className='blue-white-lightblue' label='Confirm' />
          <p>
            <a
              onClick={resendCode}
              style={{
                marginLeft: "5px",
                color: "blue",
                fontSize: "17px",
                cursor: "pointer",
              }}
              //   href='./Login'
            >
              Resend
            </a>
          </p>
        </form>
      </Body>
      <Dialog
        visible={errorDialogVisible}
        onHide={() => setErrorDialogVisible(false)}
        header={<span style={{ color: "red" }}>Error</span>}
        footer={
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <FormButton
              className='black-gray-white'
              onClick={() => setErrorDialogVisible(false)}
            >
              Continue
            </FormButton>
          </div>
        }
      >
        <div>{errorMessage}</div>
      </Dialog>
    </CardContent>
  );
}

export default ConfirmForm;
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
  @media screen and (max-width: 900px) {
    /* justify-content: flex-start; */
    font-size: 16px;
    padding: 5px 10px 5px 10px;
  }
  @media screen and (max-width: 500px) {
    /* justify-content: flex-start; */
    font-size: 14px;
    padding: 5px 10px 5px 10px;
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
    @media screen and (max-width: 900px) {
      width: 200px;
    }
  }

  &.blue-white-lightblue:hover {
    color: #2196f3;
    background-color: #fff;
    border: 1px solid #2196f3;
  }
`;
const CardContent = styled.div`
  width: 100%;
  /* padding: 2rem; */
  border-radius: 53px;
  background-color: white;
  padding-top: 2rem; /* 32px */
  padding-bottom: 5rem; /* 32px */
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #495057;
`;

const Subtitle = styled.div`
  font-size: 1rem;
  font-weight: 300;
  color: #495057;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  &p {
    font-weight: 6000;
  }
`;
const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: #495057;
  align-self: flex-start;
`;
const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  /* font-size: 10px; */
  font-weight: 100;
  font-size: 14px;
`;
const SignInButton = styled(Button)`
  width: 100%;
  padding: 0.65rem;
  font-size: 1.5rem;
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
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

  display: flex;
  flex-direction: center;
  justify-content: center;

  transition: background-color 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
