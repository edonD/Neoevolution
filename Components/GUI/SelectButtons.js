import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #2f2f2f;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  &:hover {
    background-color: #dbdbdb;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px 10px 0px;
`;
function SelectButtons() {
  const [isDisabledOutput, setIsDisabledOutput] = useState(false);
  const [isDisableTransfer, setIsDisabledTransfer] = useState(false);
  const [isDisableCapacitor, setIsDisabledCapacitor] = useState(false);

  function handleButton1Click() {
    setIsDisabledOutput(true);
    setIsDisabledTransfer(false);
    setIsDisabledCapacitor(false);
    // ...other code to handle button click
  }
  function handleButton2Click() {
    setIsDisabledTransfer(true);
    setIsDisabledOutput(false);
    setIsDisabledCapacitor(false);
    // ...other code to handle button click
  }
  function handleButton3Click() {
    setIsDisabledCapacitor(true);
    setIsDisabledOutput(false);
    setIsDisabledTransfer(false);
    // ...other code to handle button click
  }
  return (
    <Container>
      <StyledButton onClick={handleButton1Click} disabled={isDisabledOutput}>
        Output
      </StyledButton>
      <StyledButton onClick={handleButton2Click} disabled={isDisableTransfer}>
        Transfer
      </StyledButton>
      <StyledButton onClick={handleButton3Click} disabled={isDisableCapacitor}>
        Capacitor Cgg
      </StyledButton>
    </Container>
  );
}

export default SelectButtons;
