import React from "react";

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #6c757d;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #007bff;
  }
`;

function Buttons() {
  const handlePlay = () => {
    // handle play button click
  };

  const handlePause = () => {
    // handle pause button click
  };

  const handleStop = () => {
    // handle stop button click
  };

  return (
    <ButtonContainer>
      <Button onClick={handlePlay}>
        <BsFillPlayCircleFill />
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
