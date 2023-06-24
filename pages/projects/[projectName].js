import React, { useState } from "react";
import ProfileHeader from "../../Components/Account/ProfileHeader/ProfileHeader";
import SidebarModels from "../../Components/GUI/SidebarBodies/SidebarModels";
import styled from "styled-components";
import { useRouter } from "next/router";

function ProjectName() {
  const router = useRouter();

  return (
    <Container>
      <ProfileHeader />

      <SidebarModels />
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
export default ProjectName;
