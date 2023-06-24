import React, { useEffect, useState } from "react";

import ProfileHeader from "../../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";

import SidebarSelectModel from "../../../../Components/GUI/SidebarBodies/SidebarSelectModel";

import InsertData from "../../../../Components/GUI/InsertData/InsertData";

export const InData = function () {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSelectModel>
        <InsertData />
      </SidebarSelectModel>
    </div>
  );
};
