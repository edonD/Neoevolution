import React from "react";
import ProfileHeader from "../../Components/Account/ProfileHeader/ProfileHeader";
import SidebarProjects from "../../Components/GUI/SidebarBodies/SideBardProjects";
import styled from "styled-components";

function index() {
  return (
    <Container>
      <ProfileHeader />
      <SidebarProjects />
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
