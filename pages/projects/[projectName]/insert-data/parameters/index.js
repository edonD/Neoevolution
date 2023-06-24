import React from "react";
import SidebarSoftware from "../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../Components/Account/ProfileHeader/ProfileHeader";

import ParametersDataView from "../../../../../Components/GUI/Parameters-Data-View/ParametersDataView";

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
