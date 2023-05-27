import React, { useState } from "react";
import ProfileHeader from "../../Components/Account/ProfileHeader/ProfileHeader";
import SidebarProjects from "../../Components/GUI/SidebarBodies/SideBardProjects";
import styled from "styled-components";

function index() {
  const [projects, setProjects] = useState(0);

  const incrementProjects = (increment) => {
    // Do something with the received data
    setProjects(projects + increment);
  };
  const decrementProjects = (decrement) => {
    // Do something with the received data
    setProjects(projects - decrement);
  };
  return (
    <Container>
      <ProfileHeader onData={incrementProjects} />
      <SidebarProjects
        projects={projects}
        incrementProjects={incrementProjects}
        decrementProjects={decrementProjects}
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
