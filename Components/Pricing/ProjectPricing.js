import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Gradient from "rgt";
import Image from "next/image";
import { useRouter } from "next/router";

function ProjectPricing() {
  const router = useRouter();
  return (
    <Container>
      <Header>
        <Gradient dir='left-to-right' from='#00d4e6' to='#13bbde'>
          <h1>Enterprise</h1>
        </Gradient>
      </Header>
      <Description>
        <Image src='/images/ai-expert.svg' width={70} height={70} alt='logo' />
      </Description>
      <ButtonDivider>
        <FormButton
          onClick={() => {
            router.push("/Contact");
          }}
        >
          Contact US
        </FormButton>
      </ButtonDivider>
      <Divide />
      <Body>
        <ItemContainer>
          <ItemHeader>
            <h3>Fast Delivery</h3>
          </ItemHeader>
          <ItemDescription>
            <p>You will get the result in 3 hours.</p>
          </ItemDescription>
          <ItemDescription>
            <p>You will get the result in 3 hours.</p>
          </ItemDescription>
          <ItemDescription>
            <p>You will get the result in 3 hours.</p>
          </ItemDescription>
          <ItemDescription>
            <p>You will get the result in 3 hours.</p>
          </ItemDescription>
          <ItemDescription>
            <p>You will get the result in 3 hours.</p>
          </ItemDescription>
        </ItemContainer>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  margin: 10px;
  border-radius: 4px 0px 0px 4px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  background: white;
  user-select: none;
  box-shadow: 0 0 16px rgb(0, 0, 0, 50%);
  background: rgb(29, 26, 62);
  background: linear-gradient(
    130deg,
    rgba(29, 26, 62, 1) 0%,
    rgba(14, 13, 39, 1) 47%,
    rgba(2, 2, 9, 1) 100%
  );
  @media screen and (max-height: 800px) {
    /* height: 450px; */
    border-radius: 4px 4px 4px 4px;
  }
  @media screen and (max-width: 1200px) {
    /* height: 500px; */
    border-radius: 4px 4px 4px 4px;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
    border-radius: 4px 4px 4px 4px;
  }
`;

const Description = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-around;
  color: white;

  h1 {
    font-weight: 200;
    font-size: 38px;
    margin: 0px;
    text-align: center;
    padding: 0px;
  }
  h3 {
    font-weight: 200;
    font-size: 14px;
    margin: 0px;
    text-align: center;
    padding: 0px;
    color: #9d9da9;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  h1 {
    font-weight: 200;
  }
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

const Body = styled.div`
  height: 70%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ButtonDivider = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Divide = styled.div`
  height: 1px;
  width: 80%;
  background-color: #2a293f;
  margin-bottom: 30px;
`;
const ItemContainer = styled.div`
  height: 100%;
  width: 90%;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aeafb7;
`;

const ItemDescription = styled.div`
  height: fit-content;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aeafb7;

  p {
    font-weight: 100;
    margin-top: 5px;
    margin-left: 10px;
    font-size: 14px;

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;
const ItemHeader = styled.div`
  height: fit-content;
  width: 100%;

  margin-bottom: 40px;
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h3 {
    font-weight: 300;
    margin: 0px;
    margin-left: 10px;
    font-size: 22px;
  }
`;
const FormButton = styled(Button)`
  && {
    font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
    width: 80%;
    margin-bottom: 10px;
    background-color: #2f2e4a;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 16px rgb(0, 0, 0, 0%);
    font-weight: 700;
    &:hover {
      background: rgb(73, 61, 87);
      background: linear-gradient(
        130deg,
        rgba(73, 61, 87, 1) 0%,
        rgba(72, 51, 106, 1) 47%,
        rgba(50, 57, 95, 1) 100%
      );
    }

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;
export default ProjectPricing;
