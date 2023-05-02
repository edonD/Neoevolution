import React, { useState } from "react";

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";

function TestButtons({ onClickPlay, onClickStop, onClickPlot }) {
  const handlePlay = () => {
    onClickPlay();
  };

  const handlePlot = () => {
    onClickPlot();
  };

  const handleStop = () => {
    // handle stop button click
    onClickStop();
  };

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={handlePlay} className='gray-white-black'>
          NGSpice
        </Button>

        <Button onClick={handleStop} className='black-gray-white'>
          Python
        </Button>
      </ButtonContainer>
      <Button onClick={handlePlot} className='blue-white-lightblue'>
        Plot
      </Button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 10px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #1abc9c;
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 24px;

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.gray-white-black {
    background-color: #349a77;
    color: white;
    border: 1px solid #349a77;
  }

  &.gray-white-black:hover {
    color: #349a77;
    background-color: white;
    border: 1px solid #349a77;
  }

  &.black-gray-white {
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
  }

  &.black-gray-white:hover {
    color: #333;
    background-color: #fff;
    border: 1px solid #333;
  }

  &.blue-white-lightblue {
    width: 100%;
    background-color: #2196f3;
    color: #fff;
    border: 1px solid #2196f3;
  }

  &.blue-white-lightblue:hover {
    color: #2196f3;
    background-color: #fff;
    border: 1px solid #2196f3;
  }
`;

export default TestButtons;
