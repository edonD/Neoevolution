import React from "react";
import SidebarSoftware from "../../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../../Components/Account/ProfileHeader/ProfileHeader";
import ProjectModel from "../../../../../../Components/GUI/ProjectModel/ProjectModel";
import ProjectModelReplacement from "../../../../../../Components/GUI/ProjectModel/ProjectModelReplacement";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ProjectModelReplacement />
      </SidebarSoftware>
    </div>
  );
}

export default index;
