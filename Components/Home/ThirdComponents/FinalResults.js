import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

function FinalResults() {
  return (
    <Container>
      <Wrapper>
        {" "}
        <h1>Final results in 24 hours.</h1>
        <p>
          This step has the goal of converting the experimental data to a
          standard format and making sure that the data are consistent, for
          example, the output and transfer characteristics of a transistor have
          to match each other. This is a necessary step to ensure successful
          calibration. In addition, it is used to get important feedback to
          determine problems in the process of measuring the characteristics of
          the device. In case an inconsistency is detected, unless it can be
          corrected, the responses are weighted appropriately to ensure the
          desired calibration.
        </p>
        <StyledButton>Use Cases</StyledButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  height: 70vh;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const Wrapper = styled.div`
  margin-bottom: 10px;
  width: 30vw;
  height: 70vh;

  h1 {
    margin: 0px;
    font-size: 25px;
    font-weight: 500;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 20px;
    }
  }
  p {
    margin: 0px;
    margin-top: 10px;
    line-height: 1.5;
    font-size: 15px;
    font-weight: 500;
    color: #d4d7da;
    @media screen and (max-width: 1200px), screen and (max-height: 770px) {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #0513225a;
    width: 200px;
    height: 48px;
    color: white;
    font-weight: 600;
    margin-top: 20px;

    &:hover {
      background-color: #04111e;
    }

    @media screen and (max-width: 1000px) {
      width: 180px;
      margin-right: 0;
      align-self: center;
      justify-self: flex-start;
    }
  }
`;

export default FinalResults;
