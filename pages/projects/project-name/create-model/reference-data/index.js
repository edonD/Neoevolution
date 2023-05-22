import React from "react";
import SidebarSoftware from "../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../Components/Account/ProfileHeader/ProfileHeader";

import ReferenceDataView from "../../../../../Components/GUI/Reference-Data-View/ReferenceDataView";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ReferenceDataView />
      </SidebarSoftware>
    </div>
  );
}

export default index;
