import React, { useState } from "react";
import { Button } from "primereact/button";
import styled from "styled-components";
import SignUpForm from "./SignUpForm";
import ConfirmForm from "./ConfirmForm";

const SignupTest = ({ signUp }) => {
  const [flowState, setFlowState] = useState("");

  const handleFlowStateChange = (newFlowState) => {
    setFlowState(newFlowState);
  };

  return (
    <Container>
      <ContentWrapper>
        <StyledCard>
          {flowState === "signUpState" ? (
            <ConfirmForm />
          ) : (
            <SignUpForm callbackFunction={handleFlowStateChange} />
          )}
        </StyledCard>
      </ContentWrapper>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
  height: 100%;
  width: 100%;
  padding: 20px 0px 20px 0px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 500px;
`;

const LogoImage = styled.img`
  margin-bottom: 1.5rem;
  width: 4rem;
  flex-shrink: 0;
`;

const StyledCard = styled.div`
  border-radius: 26px;
  padding: 0.3rem;
  background: linear-gradient(
    180deg,
    rgba(157, 206, 247, 1) 5%,
    rgba(33, 150, 243, 0) 25%
  );
  width: 100%;
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
const LogoContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 60px;
  overflow: hidden;
  background: transparent;

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  user-select: none;
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

const FormLabel = styled.label`
  display: block;
  font-weight: bold;
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
  color: #495057;
  align-self: flex-start;
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

const ForgotPasswordLink = styled.a`
  color: #6366f1;
  cursor: pointer;
  margin-left: 0.5rem;
  font-weight: 200;
  font-size: 14px;
`;
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

export default SignupTest;
