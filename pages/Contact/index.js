import React from "react";
import styled from "styled-components";
import Form from "../../Components/ContactForm/Form";
import Header from "../../Components/Home/Header";

function Contact() {
  return (
    <Container>
      {/* <Background /> */}
      <Form />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  margin: 0px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  background: #000;
  transform: skew(-30deg);
  transform-origin: top;
`;

export default Contact;
