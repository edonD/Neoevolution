import React from "react";

import ProfileHeader from "../../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";
import ModelsGrid from "../../../../Components/GUI/Models/ModelsGrid";
import SidebarSelectModel from "../../../../Components/GUI/SidebarBodies/SidebarSelectModel";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSelectModel>
        <ModelsGrid />
      </SidebarSelectModel>
    </div>
  );
}

const Header = styled.h1`
  margin-left: 0px;
  margin-right: 0px;
`;
export default index;
