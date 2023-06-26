import React, { useState } from "react";
import ProfileHeader from "../../Components/Account/ProfileHeader/ProfileHeader";
import SidebarModels from "../../Components/GUI/SidebarBodies/SidebarModels";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  NotSignedIn,
  UseProtectedRoute,
} from "../../Components/Protection/UseProtectedRoute";
import { Oval, RotatingSquare } from "react-loader-spinner";

function ProjectName() {
  const { isLoading, isAuthenticated } = UseProtectedRoute();
  if (isLoading) {
    // Render loading state, such as a spinner or a loading message
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          height='100'
          width='100'
          color='#2488ff'
          ariaLabel='rotating-square-loading'
          strokeWidth='4'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    // Render a message or redirect to the login page
    return (
      <div>
        <NotSignedIn />
      </div>
    );
  }

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
