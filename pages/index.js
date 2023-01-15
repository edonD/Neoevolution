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
          header={"Active Modeling"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued workers or people standing too close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
        />
        <Third
          sreverse={false}
          header={"yee safety"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued workers or people standing too close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
        />
        <Third
          sreverse={true}
          header={"Employ safety"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued workers or people standing too close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
        />
        <Third
          sreverse={false}
          header={"Emplo safety"}
          paragraph={
            "Analyze plant images and video against previous accident records to predict where future accidents may occur. Spot fatigued workers or people standing too close to running machine or employees without PPE. Recognize safety hazards such as spills, blocked fire exits, and unattended security posts."
          }
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
`;
const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  margin-bottom: 50px;
  box-shadow: 0px 0px 17px 3px rgba(158, 153, 158, 1);
`;

export default index;
