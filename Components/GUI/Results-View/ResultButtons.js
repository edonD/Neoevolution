import React from "react";
import styled from "styled-components";

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-left: 10px;
  @media screen and (max-width: 900px) {
    /* flex-direction: column; */
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
  font-size: 18px;
  width: 30%;
  @media screen and (max-width: 900px) {
    font-size: 18px;
    padding: 5px;
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
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

function ResultButtons() {
  return (
    <ButtonRow>
      <Button className='blue-white-lightblue'>Download Model</Button>
      <Button className='blue-white-lightblue'>Download All Plots</Button>
    </ButtonRow>
  );
}

export default ResultButtons;
