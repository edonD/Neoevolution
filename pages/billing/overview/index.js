import React from "react";
import styled from "styled-components";
import Billing from "../../../Components/Account/Billing";
import Header from "../../../Components/Home/Header";
import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";

function Contact() {
  return (
    <Container>
      {/* <Container> */}
      <ProfileHeader />
      <Billing />
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

export default Contact;
