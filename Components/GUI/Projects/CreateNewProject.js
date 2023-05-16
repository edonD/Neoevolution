import React from "react";
import { GiSwirledShell } from "react-icons/gi";
import AiValanchePopUp from "../../../Components/GUI/AiValancheHome/AiValanchePopUp";
import styled from "styled-components";

function CreateNewProject({ onData }) {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <GiSwirledShell size={50} style={{ transform: "rotate(-180deg)" }} />
        </Logo>
        <Body>
          <HeaderIntro>Design Your Own Project</HeaderIntro>
          <Description>
            A project is a place for you to organize all of your content
            including models, simulations, model calibrations and more.
          </Description>
          <ButtonContainer>
            <AiValanchePopUp onData={onData} ButtonText={"Create"} size={18} />
          </ButtonContainer>
        </Body>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: transparent;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 100px;
  height: 100%;
  width: 100%;
`;

const Description = styled.p`
  font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: lighter;
  color: #667085;
  text-align: center;
`;
const HeaderIntro = styled.h3`
  font-family: Inter, Montserrat, Helvetica, Arial, sans-serif;
  /* font-size: 12px; */
  font-weight: lighter;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 50%;
`;

const Body = styled.div`
  width: 30%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  background: transparent;

  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: black;
  user-select: none;
  @media (max-width: 1000px) {
    width: 20%;
  }
`;

export default CreateNewProject;
