import React from "react";
import styled from "styled-components";
import Account from "../../../Components/Account/Account";

import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";

function Contact() {
  return (
    <Container>
      <ProfileHeader />
      <Account />
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
