import React, { useState } from "react";
import ProfileHeader from "../../../../Components/Account/ProfileHeader/ProfileHeader";
import SidebarModels from "../../../../Components/GUI/SidebarBodies/SidebarModels";
import styled from "styled-components";

function index() {
  const [models, setModels] = useState(0);
  const incrementProjects = (increment) => {
    // Do something with the received data
    setModels(models + increment);
  };
  const decrementProjects = (decrement) => {
    // Do something with the received data
    setModels(models - decrement);
  };
  return (
    <Container>
      <ProfileHeader onData={incrementProjects} />
      <SidebarModels
        models={models}
        increment={incrementProjects}
        decrement={decrementProjects}
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

  /* overflow-y: scr; */
`;
export default index;
