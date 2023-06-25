import React from "react";

import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";
import ModelsGrid from "../../../Components/GUI/Models/ModelsGrid";
import SidebarSelectModel from "../../../Components/GUI/SidebarBodies/SidebarSelectModel";
import { useRouter } from "next/router";
import { InData } from "../../../Components/GUIViews/insert-data/InData";
import { Model } from "../../../Components/GUIViews/insert-data/model/index";
import { Opti } from "../../../Components/GUIViews/insert-data/optimizer/index";
import { Parameters } from "../../../Components/GUIViews/insert-data/parameters/index";
import { Results } from "../../../Components/GUIViews/insert-data/results/index";
import { ReferenceData } from "../../../Components/GUIViews/insert-data/reference-data/";

function ModelName() {
  const router = useRouter();

  const { modelName } = router.query; // Access the dynamic segment value from router.query

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
          case "results":
            return <Results />;
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
