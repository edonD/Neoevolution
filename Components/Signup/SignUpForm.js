import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import Amplify, { API, Auth } from "aws-amplify";
import styled from "styled-components";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserNameId,
  setProfile,
  setUser,
} from "../../store/slices/userSlice";
import { updateProfileInformation } from "../../src/graphql/mutations";
import { useRef } from "react";
import { Toast } from "primereact/toast";

function SignUpForm({ callbackFunction }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [checked, setChecked] = useState(false);
  const [errorDialogVisible, setErrorDialogVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toast = useRef(null);

  // const handleError = () => {
  //   // Call the callback function with the item as an argument
  //   toast.current.show({
  //     severity: "error",
  //     summary: "Error",
  //     detail: "Error Updating",
  //     life: 3000,
  //   });
  // };

  // const handleSuccess = () => {
  //   toast.current.show({
  //     severity: "success",
  //     summary: "Updated",
  //     detail: "Update Successful",
  //     life: 3000,
  //   });
  // };

  async function signUp() {
    try {
      setLoading(true);
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email, // optional
          given_name: name, // optional - first name
          family_name: lastName, // optional - last name
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: true,
        },
      });

      dispatch(setUser(user.username));
      dispatch(setProfile({ name: name, lastName: lastName }));

      // fetchUserId();
      handleConfirmClick();
      // CreateProfileInformation();
    } catch (error) {
      console.log("error signing up:", error);
      setErrorMessage(error.message);
      setErrorDialogVisible(true);
    }
    setLoading(false);
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
        <FormStyled onSubmit={SubmitSignUp}>
          <FormLabel htmlFor='email2'>First Name</FormLabel>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
          <PasswordStyled
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
            loading={loading}
            // onClick={() => {
            //   signUp();
            // }}
          ></SignInButton>
          <p>
            Already have an account?
            <a style={{ marginLeft: "5px", color: "blue" }} href='./Login'>
              Login
            </a>
          </p>
        </FormStyled>
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
  border-radius: 23px;
  background-color: white;
  padding-top: 2rem; /* 32px */
  padding-bottom: 2rem; /* 32px */
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormStyled = styled.form`
  width: 100%;
`;
const PasswordStyled = styled(Password)`
  width: 100%;

  margin-bottom: 20px;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 38px;
  margin-bottom: 1rem;
  color: #495057;
  @media screen and (max-width: 1200px) {
    font-size: 32px;
  }
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.div`
  font-size: 22px;
  font-weight: 300;
  color: #495057;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
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
  padding: 0.8rem;
  font-size: 1.15rem;
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
