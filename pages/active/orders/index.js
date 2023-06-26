import React from "react";
import styled from "styled-components";
import Orders from "../../../Components/Account/Orders";
import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";
import Header from "../../../Components/Home/Header";
import {
  NotSignedIn,
  UseProtectedRoute,
} from "../../../Components/Protection/UseProtectedRoute";
import { Oval } from "react-loader-spinner";

function Contact() {
  const { isLoading, isAuthenticated } = UseProtectedRoute();
  if (isLoading) {
    // Render loading state, such as a spinner or a loading message
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          height='100'
          width='100'
          color='#2488ff'
          ariaLabel='rotating-square-loading'
          strokeWidth='4'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Render a message or redirect to the login page
    return (
      <div>
        <NotSignedIn />
      </div>
    );
  }
  return (
    <Container>
      {/* <Container> */}
      <ProfileHeader />
      <Orders />
      {/* </Container> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  margin: 0px;
  @media screen and (max-height: 750px) {
    height: 100%;
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    height: 100%;
    background-color: white;
  }
`;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background: red;
  background-color: red;
`;

export default Contact;
