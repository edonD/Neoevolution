import React, { useEffect, useState } from "react";

import ProfileHeader from "../../../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";

import SidebarSelectModel from "../../../../../Components/GUI/SidebarBodies/SidebarSelectModel";

import InsertData from "../../../../../Components/GUI/InsertData/InsertData";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSelectModel>
        <InsertData />
      </SidebarSelectModel>
    </div>
  );
}

const Header = styled.h1`
  margin-left: 0px;
  margin-right: 0px;
`;
export default index;
