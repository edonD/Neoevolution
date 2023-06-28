import React, { useEffect, useState } from "react";

import ProfileHeader from "../../../Components/Account/ProfileHeader/ProfileHeader";
import styled from "styled-components";

import SidebarSelectModel from "../../../Components/GUI/SidebarBodies/SidebarSelectModel";

import InsertData from "../../../Components/GUI/InsertData/InsertData";
import { useDispatch } from "react-redux";
import { updateTestbenchItem } from "../../../store/slices/headerIconsSlice";
import { cleanAllStatesNetlist } from "../../../store/slices/modelNetlistSlice";
import { cleanAllStatesReferenceData } from "../../../store/slices/referenceDataSlice";
import { cleanAllStatesProject } from "../../../store/slices/projectListSlice";
import { cleanAllStatesModel } from "../../../store/slices/modelListSlice";
import { cleanAllStatesParameters } from "../../../store/slices/parametersDataSlice";

export const InData = function () {
  const dispatch = useDispatch();
  const handleUpdateHeaderIcon = (label, newValue) => {
    dispatch(updateTestbenchItem({ label, value: newValue }));
  };
  useEffect(() => {
    handleUpdateHeaderIcon("Reference Data", "empty");
    handleUpdateHeaderIcon("Model", "empty");
    handleUpdateHeaderIcon("Optimizer", "empty");
    handleUpdateHeaderIcon("Parameters", "empty");
    handleUpdateHeaderIcon("Results", "empty");
    dispatch(cleanAllStatesNetlist());
    dispatch(cleanAllStatesReferenceData());
    // dispatch(cleanAllStatesProject());
    // dispatch(cleanAllStatesModel());
    dispatch(cleanAllStatesParameters());
  }, []);

  return (
    <div>
      <ProfileHeader />
      {/* <Header>Lets check it!</Header> */}
      <SidebarSelectModel>
        <InsertData />
      </SidebarSelectModel>
    </div>
  );
};
