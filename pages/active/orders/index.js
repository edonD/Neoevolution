import React from "react";
import styled from "styled-components";
import Orders from "../../../Components/Account/Orders";
import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";
import Header from "../../../Components/Home/Header";

function Contact() {
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
