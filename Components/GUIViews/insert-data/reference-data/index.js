import React from "react";
import SidebarSoftware from "../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../Components/Account/ProfileHeader/ProfileHeader";

import ReferenceDataView from "../../../../Components/GUI/Reference-Data-View/ReferenceDataView";

import styled from "styled-components";

export const ReferenceData = function () {
  return (
    <Container>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ReferenceDataView />
      </SidebarSoftware>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  /* padding-right: calc(100vw - 100%); */
`;
