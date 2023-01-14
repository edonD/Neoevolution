import React from "react";
import styled from "styled-components";
import Header from "../../../Components/Home/Header";
import First from "../../../Components/Services/PassiveModeling/First";
import Second from "../../../Components/Services/PassiveModeling/Second";
import Third from "../../../Components/Services/PassiveModeling/Third";
function index() {
  return (
    <Container>
      <Header />
      <First />
      <Second />
      <Third
        sreverse={true}
        header={"Employee safety"}
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

export default index;
