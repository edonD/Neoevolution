import React from "react";
import SidebarSoftware from "../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../Components/Account/ProfileHeader/ProfileHeader";
import ProjectModelReplacement from "../../../../../Components/GUI/ProjectModel/ProjectModelReplacement";

export const Model = function () {
  return (
    <div>
      <ProfileHeader />
      <SidebarSoftware>
        <ProjectModelReplacement />
      </SidebarSoftware>
    </div>
  );
};
