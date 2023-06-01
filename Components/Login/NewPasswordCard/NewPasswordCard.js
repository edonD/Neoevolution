import { useRouter } from "next/router";
import React, { useContext, useRef, useState } from "react";

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { Auth } from "aws-amplify";
import styled from "styled-components";
import { Message } from "primereact/message";
import { InputMask } from "primereact/inputmask";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

function NewPasswordCard({ callbackFunction }) {
  // const [username, setUsername] = useState("edonderguti@gmail.com");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const username = useSelector(selectUser);

  async function ForgotPassword() {
    try {
      await Auth.forgotPasswordSubmit(username, confirmationCode, newPassword);
      handleConfirmClick();
    } catch (error) {
      console.log("error signing in", error);
      setErrorMessage(error.message);
      setErrorDialogVisible(true);
    }
  }
  const handleConfirmClick = () => {
    setMessageVisible(true);
    router.push("/projects");
  };
  const SubmitForgotPassword = (event) => {
    event.preventDefault();
    ForgotPassword();
  };
  const router = useRouter();
  return (
    <CardContent>
      <Header>
        <Title>Insert new password</Title>
      </Header>
      <Body>
        <form
          onSubmit={SubmitForgotPassword}
          style={{
            width: "100%",
          }}
        >
          <FormLabel htmlFor='email1'>Confirmation Code</FormLabel>
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
              margin: "0px 0px 20px 0px",
            }}
            required
          />

          <FormLabel htmlFor='email1'>New Password</FormLabel>
          <Password
            id='password1'
            required
            placeholder='New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            // className='w-full mb-5'
            inputClassName='w-full p-3 md:w-30rem'
            style={{
              // padding: "1rem",
              width: "100%",
              margin: "0px",
              marginBottom: "20px",
            }}
          />
          <MessageContainer messageVisible={messageVisible}>
            <Message severity='success' text='Password Successfully Changed' />
          </MessageContainer>
          <SignInButton className='blue-white-lightblue' label='Confirm' />
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

export default NewPasswordCard;
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

const MessageContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.messageVisible ? "flex" : "none")};
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
