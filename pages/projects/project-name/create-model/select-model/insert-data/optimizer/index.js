import React from "react";
import SidebarSoftware from "../../../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";
import Optimizer from "../../../../../../../Components/GUI/Optimizer/Optimizer";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <Optimizer />
      </SidebarSoftware>
    </div>
  );
}

const Header = styled.h1`
  margin-left: 0px;
  margin-right: 0px;
`;
export default index;
