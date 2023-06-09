import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Amplify, { Auth } from "aws-amplify";
import styled from "styled-components";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

function SignUpForm({ callbackFunction }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  async function signUp() {
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email, // optional
          // phone_number, // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });

      dispatch(setUser(user.username));

      // fetchUserId();
      handleConfirmClick();
    } catch (error) {
      console.log("error signing up:", error);
      setErrorMessage(error.message);
      setErrorDialogVisible(true);
    }
  }

  const SubmitSignUp = (event) => {
    event.preventDefault();
    signUp();
  };

  const handleConfirmClick = () => {
    callbackFunction("signUpState");
  };

  const router = useRouter();
  return (
    <CardContent>
      {" "}
      <Header>
        <Title>Register</Title>
        <Subtitle>Let‘s get started</Subtitle>
      </Header>
      <Body>
        <form onSubmit={SubmitSignUp}>
          <FormLabel htmlFor='email2'>First Name</FormLabel>
          <InputText
            type='text'
            placeholder='First Name'
            style={{
              padding: "1rem",
              width: "100%",
              marginBottom: "20px",
            }}
            required
          />
          <FormLabel htmlFor='email2'>Last Name</FormLabel>
          <InputText
            type='text'
            placeholder='Last Name'
            style={{
              padding: "1rem",
              width: "100%",
              marginBottom: "20px",
            }}
            required
          />
          <FormLabel htmlFor='email1'>Email</FormLabel>
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email address'
            style={{
              padding: "1rem",
              width: "100%",
              marginBottom: "20px",
            }}
            required
          />
          <FormLabel htmlFor='password1'>Password</FormLabel>
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            toggleMask
            className='w-full mb-5'
            inputClassName='w-full p-3 md:w-30rem'
          />
          {/* <div className='flex align-items-center justify-content-between mb-5 gap-5'> */}
          <FooterContainer>
            <RememberMeContainer>
              <Checkbox
                id='rememberme1'
                checked={checked}
                onChange={(e) => setChecked(e.checked)}
                className='mr-2'
                required
              />
              <label htmlFor='rememberme1'>
                I have read the Terms and Conditions
              </label>
            </RememberMeContainer>
            {/* <ForgotPasswordLink>Forgot password?</ForgotPasswordLink> */}
          </FooterContainer>
          <SignInButton
            className='blue-white-lightblue'
            label='Sign Up'
            // onClick={() => {
            //   signUp();
            // }}
          />
          <p>
            Already have an account?
            <a style={{ marginLeft: "5px", color: "blue" }} href='./Login'>
              Login
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

export default SignUpForm;
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
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #495057;
`;

const Subtitle = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
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
  padding: 1rem;
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
