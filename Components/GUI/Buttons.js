import React, { useState } from "react";

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #353740;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 35px;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    color: black;
    background-color: #d0d0d0;
  }
`;

function Buttons({ onClickPlay, onClickStop }) {
  const handlePlay = () => {
    onClickPlay();
  };

  const handlePause = () => {
    // handle pause button click
  };

  const handleStop = () => {
    // handle stop button click
    onClickStop();
  };

  return (
    <ButtonContainer>
      <Button onClick={handlePlay}>
        <FaPlay />
      </Button>
      <Button onClick={handlePause}>
        <FaPause />
      </Button>
      <Button onClick={handleStop}>
        <FaStop />
      </Button>
    </ButtonContainer>
  );
}

export default Buttons;
