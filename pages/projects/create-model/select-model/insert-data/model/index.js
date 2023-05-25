import React from "react";
import SidebarSoftware from "../../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../../Components/Account/ProfileHeader/ProfileHeader";
import ProjectModel from "../../../../../../Components/GUI/ProjectModel/ProjectModel";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ProjectModel />
      </SidebarSoftware>
    </div>
  );
}

export default index;
