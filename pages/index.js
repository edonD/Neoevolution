import React from "react";
import styled from "styled-components";
import Header from "../Components/Home/Header";
import First from "../Components/Home/First";
import Second from "../Components/Home/Second";
import Third from "../Components/Home/Third";
function index() {
  return (
    <Container>
      <Header />
      <First />
      <Second />
      <ThirdContainer>
        <Third
          sreverse={true}
          header={"Model Calibration Software"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued workers or people standing too close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
          button={"Contact US"}
        />
        <Third
          sreverse={false}
          header={"Design and Verification"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued w close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
          button={"Contact US"}
        />
        <Third
          sreverse={true}
          header={"Analog IP Technology"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued w close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
          button={"Contact US"}
        />

        <Third
          sreverse={false}
          header={"Custom Analog ICs"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued workers or people standing too close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
          button={"Learn More"}
        />
      </ThirdContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: transparent;
`;
const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 100%;
  margin-bottom: 50px;
`;

export default index;
