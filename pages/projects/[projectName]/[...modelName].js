import React from "react";

import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";
import ModelsGrid from "../../../Components/GUI/Models/ModelsGrid";
import SidebarSelectModel from "../../../Components/GUI/SidebarBodies/SidebarSelectModel";
import { useRouter } from "next/router";
import { InData } from "./insert-data/InData";
import { Model } from "./insert-data/model/index";
import { Opti } from "./insert-data/optimizer/index";
import { Parameters } from "./insert-data/parameters/index";
import { ReferenceData } from "./insert-data/reference-data/";

function ModelName() {
  const router = useRouter();

  const { modelName } = router.query; // Access the dynamic segment value from router.query
  modelName && console.log("Edon: ", modelName);

  const renderScreen = () => {
    switch (modelName[1]) {
      case "insert-data":
        switch (modelName[2]) {
          case "reference-data":
            return <ReferenceData />;
          case "parameters":
            return <Parameters />;
          case "model":
            return <Model />;
          case "optimizer":
            return <Opti />;
          default:
            return <InData />;
        }
    }
    return (
      <div>
        <ProfileHeader />
        <SidebarSelectModel>
          <ModelsGrid />
        </SidebarSelectModel>
      </div>
    );
  };

  return <div>{modelName && renderScreen()}</div>;
}

const Header = styled.h1`
  margin-left: 0px;
  margin-right: 0px;
`;
export default ModelName;
