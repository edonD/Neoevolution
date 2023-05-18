import React from "react";
import styled from "styled-components";
import { FaPlay, FaPause } from "react-icons/fa";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #6e96f6;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #3862ff;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    margin-right: 8px;
  }
`;

const StartButton = styled(Button)`
  background-color: #4caf50;

  &:hover {
    background-color: #45a049;
  }
`;

const SingleButton = styled(Button)`
  background-color: #ff9800;

  &:hover {
    background-color: #f57c00;
  }
`;

const StopButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;

const StartIcon = styled(FaPlay)`
  color: white;
  font-size: 18px;
`;

const PauseIcon = styled(FaPause)`
  color: white;
  font-size: 18px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

function Test() {
  return (
    <ButtonContainer>
      <StartButton>
        <StartIcon />
        Start Calibration
      </StartButton>
      <SingleButton>
        <StartIcon />
        Single Calibration
      </SingleButton>
      <StopButton>
        <PauseIcon />
        Stop Calibration
      </StopButton>
    </ButtonContainer>
  );
}

export default Test;
