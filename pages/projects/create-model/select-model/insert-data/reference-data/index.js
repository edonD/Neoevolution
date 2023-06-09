import React from "react";
import SidebarSoftware from "../../../../../../Components/GUI/SidebarBodies/SidebarSoftware";
import ProfileHeader from "../../../../../../Components/Account/ProfileHeader/ProfileHeader";

import ReferenceDataView from "../../../../../../Components/GUI/Reference-Data-View/ReferenceDataView";
import { retrieveJSONFromS3 } from "../../../../../../Components/Storage/UploadFileFunctions";
import dynamic from "next/dynamic";

function index({ jsonData, totalFile }) {
  const Plot = dynamic(
    () => import("../../../../../../Components/Plotly/Plot"),
    {
      ssr: false,
    }
  );
  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSoftware>
        <ReferenceDataView />
        <Plot />
        <Plot />
      </SidebarSoftware>
    </div>
  );
}

export default index;
