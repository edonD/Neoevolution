import React from "react";

import { useState, useEffect } from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  height: 30px;
  background-color: #ddd;
  border: 1px solid #2f2f2f;
  border-radius: 1px;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 50px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #3ba9e7;
  border-radius: 1px;
  transition: width 0.1s ease;
`;

const ProgressNumber = styled.span`
  position: absolute;
  font-size: 14px;
  color: #2f2f2f;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function ProgressBar({ now }) {
  const [progress, setProgress] = useState(0);

  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((progress) => progress + 1);
      }, 100);

      return () => clearInterval(interval);
    }
  }, [progress, now, check]);

  return (
    <ProgressBarContainer>
      <ProgressFill style={{ width: `${progress}%` }}>
        <ProgressNumber>{progress}%</ProgressNumber>
      </ProgressFill>
    </ProgressBarContainer>
  );
}

export default ProgressBar;
