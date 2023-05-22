import React from "react";
import SidebarSoftware from "../../../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";
import ParametersDataView from "../../../../../../../Components/GUI/Parameters-Data-View/ParametersDataView";

function index() {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ParametersDataView />
      </SidebarSoftware>
    </div>
  );
}

export default index;
