import React from "react";
import styled from "styled-components";
import SinglePricing from "../../Components/Pricing/SinglePricing";
import ProjectPricing from "../../Components/Pricing/ProjectPricing";
import EnterprisePricing from "../../Components/Pricing/EnterprisePricing";
import Header from "../../Components/Home/Header";
import { width } from "@mui/system";

function Pricing() {
  return (
    <Header>
      <Container>
        <Description>
          <h1>Simple transparent pricing</h1>
          <h3>Pick a plan that fits your need</h3>
        </Description>
        <PricingContainer>
          <SinglePricing />
          <ProjectPricing />
          <EnterprisePricing />
        </PricingContainer>
      </Container>
    </Header>
  );
}
const Description = styled.div`
  width: 100%;
  height: 30%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
  user-select: none;
  h1 {
    font-size: 38px;
    margin: 0px;
    font-weight: 300;
    @media screen and (max-width: 1200px),
      screen and (max-height: 800px) and (min-width: 1200px) {
      font-size: 32px;
    }
    @media screen and (max-width: 600px), screen and (max-height: 800px) {
      font-size: 24px;
    }
  }
  h3 {
    font-size: 22px;
    font-weight: 300;
    color: #b3b3b3;
    @media screen and (max-width: 1200px),
      screen and (max-height: 800px) and (min-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 600px), screen and (max-height: 800px) {
      font-size: 16px;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  top: 0;
  z-index: 3;
  background: -webkit-linear-gradient(
    to right,
    rgba(56, 189, 248, 1),
    rgba(59, 130, 246, 1)
  );

  /*W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: radial-gradient(
    circle at center center,
    #2c3e70 0%,
    #17181c 100%
  );
  /* @media screen and (max-height: 800px) and (max-width: 1200px) {
    height: 200vh;
    justify-content: center;
    align-items: center;
  } */

  @media screen and (max-width: 1200px),
    screen and (max-height: 800px) and (min-width: 1200px) {
    height: auto;
    flex-direction: column;
  }
`;

const PricingContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (max-height: 600px) and (min-width: 1200px) {
    margin-bottom: 100px;
    width: 100%;

    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    margin-bottom: 100px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-height: 650px) {
    margin-bottom: 100px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
`;
const SinglePricingContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-height: 800px) and (min-width: 1200px) {
    margin-top: 150px;
    margin-bottom: 100px;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-width: 1200px) {
    margin-top: 150px;
    margin-bottom: 100px;
    width: 100%;
    justify-content: center;
  }
  @media screen and (max-height: 650px) {
    margin-top: 150px;
    margin-bottom: 100px;
    width: 100%;
    justify-content: center;
  }
`;
export default Pricing;
