import React, { useState } from "react";

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";

function Buttons({ onClickRunPython, onClickRunNGSPice, onClickPlot }) {
  const handlePlay = () => {
    onClickRunNGSPice();
  };

  const handlePlot = () => {
    onClickPlot();
  };

  const handleStop = () => {
    // handle stop button click
    onClickRunPython();
  };

  return (
    <Container>
      <Button onClick={handlePlot} className='green-white'>
        <StartIcon className='icon1' style={{ margin: "5px" }} />
        Start Calibration
      </Button>

      <Button onClick={handlePlay} className='gray-white-black'>
        <StartIcon className='icon2' style={{ margin: "5px" }} />
        Single Calibration
      </Button>

      <Button onClick={handleStop} className='black-gray-white'>
        <PauseIcon className='icon3' style={{ margin: "5px" }} />
        Stop Calibration
      </Button>
    </Container>
  );
}
const StartIcon = styled(FaPlay)`
  color: white;
  font-size: 18px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const PauseIcon = styled(FaPause)`
  color: white;
  font-size: 18px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 30px;
  }
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
  width: 30%;
  @media screen and (max-width: 900px) {
    width: 80%;
    font-size: 18px;
    padding: 5px;
  }

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.gray-white-black {
    background-color: #ed7b00;
    color: white;
    border: 1px solid #ed7b00;
  }

  &.gray-white-black:hover {
    color: #ed7b00;
    background-color: white;
    border: 1px solid #ed7b00;
    .icon2 {
      color: #ed7b00;
    }
  }

  &.black-gray-white {
    background-color: #ea402f;
    color: #fff;
    border: 1px solid #ea402f;
  }

  &.black-gray-white:hover {
    color: #ea402f;
    background-color: #fff;
    border: 1px solid #ea402f;
    .icon3 {
      color: #ea402f;
    }
  }

  &.green-white {
    background-color: #349a77;
    color: #fff;
    border: 1px solid #349a77;
  }

  &.green-white:hover {
    color: #349a77;
    background-color: #fff;
    border: 1px solid #349a77;
    .icon1 {
      color: #349a77;
    }
  }
`;

export default Buttons;
