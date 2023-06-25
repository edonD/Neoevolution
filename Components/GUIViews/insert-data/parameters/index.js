import React from "react";
import SidebarSoftware from "../../../GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../Account/ProfileHeader/ProfileHeader";

import ParametersDataView from "../../../GUI/Parameters-Data-View/ParametersDataView";

export const Parameters = function () {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ParametersDataView />
      </SidebarSoftware>
    </div>
  );
};
