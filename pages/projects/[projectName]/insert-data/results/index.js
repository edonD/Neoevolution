import React from "react";
import SidebarSoftware from "../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";
import ResultsView from "../../../../../Components/GUI/Results-View/ResultsView";

export const Results = function () {
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ResultsView />
      </SidebarSoftware>
    </div>
  );
};

const Header = styled.h1`
  margin-left: 0px;
  margin-right: 0px;
`;
export default Results;
