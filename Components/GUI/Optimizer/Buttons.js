import React, { useRef, useState } from "react";

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import {
  setReferenceData,
  setNetlist,
  setParametersData,
  setTestBench,
  addAdvancedOption,
  selectAdvancedOptions,
  selectNetlist,
  selectParametersData,
  selectReferenceData,
  selectTestBench,
} from "../../../store/slices/calibrationSlice";

import { Toast } from "primereact/toast";
import { uploadFile, uploadJSONToS3 } from "../../Storage/UploadFileFunctions";

import { selectedModel } from "../../../store/slices/modelNetlistSlice";
import { selectedReferenceData } from "../../../store/slices/referenceDataSlice";
import { selectedTestbench } from "../../../store/slices/testbenchesSlice";
import { selectedParametersData } from "../../../store/slices/parametersDataSlice";
import { getAdvancedOptionsDefaultValues } from "../../../store/slices/advancedOptionsSlice";

import { selectheaderIcon } from "../../../store/slices/headerIconsSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectUserNameId } from "../../../store/slices/userSlice";
import { currentProject } from "../../../store/slices/projectListSlice";
import { currentModel } from "../../../store/slices/modelListSlice";

function Buttons({ onClickRunPython, onClickRunNGSPice, onClickPlot }) {
  const [startSimulation, setStartSimulation] = useState(false);
  const Model = useSelector(selectedModel);
  const ReferenceData = useSelector(selectedReferenceData);
  const TestBench = useSelector(selectedTestbench);
  const ParametersData = useSelector(selectedParametersData);
  const advancedOptions = useSelector(getAdvancedOptionsDefaultValues);
  const usernameID = useSelector(selectUserNameId);
  const RDfolderName = "Reference Data";
  const TBfolderName = "Testbenches";
  const PDfolderName = "Model Parameters";
  const NLfolderName = "Model Netlist";

  const Icons = useSelector(selectheaderIcon);

  const project = useSelector(currentProject);
  const model = useSelector(currentModel);

  const userId = usernameID; // Replace with the actual user ID.
  const projectId = project;
  const modelId = model;

  const subPath = `${userId}/${projectId}/${modelId}`;

  const JSONReferendeData = `${subPath}/${RDfolderName}/${ReferenceData}`;
  const JSONTestBench = `${subPath}/${TBfolderName}/${TestBench}`;
  const JSONParametersData = `${subPath}/${PDfolderName}/${ParametersData}`;
  const JSONNetlist = `${subPath}/${NLfolderName}/${Model}`;

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Simulation Started",
      life: 3000,
    });
  };
  const dispatch = useDispatch();

  const checkFirstThreeItems = () => {
    const firstThreeItems = Icons.slice(0, 3);

    const isEmpty = firstThreeItems.some((item) => item.value === "empty");

    return !isEmpty; // Returns true if none of the first three items are empty, false otherwise
  };
  const singleCalibrationHandle = () => {
    if (checkFirstThreeItems()) {
      dispatch(setReferenceData(ReferenceData));
      dispatch(setNetlist(Model));
      dispatch(setParametersData(ParametersData));
      dispatch(setTestBench(TestBench));
      dispatch(addAdvancedOption(advancedOptions));
      const jsonData = {
        ReferenceData: JSONReferendeData,
        Model: JSONNetlist,
        ParametersData: JSONParametersData,
        TestBenches: JSONTestBench,
        advancedOptions,
        type: "Single Calibration",
      };
      const jsonString = JSON.stringify(jsonData, null, 2);
      uploadJSONToS3(
        subPath,
        "Start Simulation",
        jsonString,
        handleRegerenceDataProgressChange,
        handleUploadReferenceDataComplete
      );
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please make sure that all the files are correctly set",
        life: 3000,
      });
    }
  };

  const handleRegerenceDataProgressChange = (progress) => {
    setStartSimulation(true);
  };
  const handleUploadReferenceDataComplete = () => {
    setStartSimulation(false);
    show();
  };

  const startCalibrationHandle = () => {
    if (checkFirstThreeItems()) {
      dispatch(setReferenceData(ReferenceData));
      dispatch(setNetlist(Model));
      dispatch(setParametersData(ParametersData));
      dispatch(setTestBench(TestBench));
      dispatch(addAdvancedOption(advancedOptions));
      const jsonData = {
        ReferenceData: JSONReferendeData,
        Model: JSONNetlist,
        ParametersData: JSONParametersData,
        TestBenches: JSONTestBench,
        advancedOptions,
        type: "Complete Calibration",
      };
      const jsonString = JSON.stringify(jsonData, null, 2);
      uploadJSONToS3(
        subPath,
        "Start Simulation",
        jsonString,
        handleRegerenceDataProgressChange,
        handleUploadReferenceDataComplete
      );
    } else {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Please make sure that all the files are correctly set",
        life: 3000,
      });
    }
  };

  const handleStop = () => {
    // handle stop button click
  };

  const toast = useRef(null);

  return (
    <Container>
      <Toast ref={toast} position='bottom-right' />
      <Button onClick={startCalibrationHandle} className='green-white'>
        <StartIcon className='icon1' style={{ margin: "0px 5px 0px 5px" }} />
        Start Calibration
      </Button>

      <Button onClick={singleCalibrationHandle} className='gray-white-black'>
        <StartIcon className='icon2' style={{ margin: "0px 5px 0px 5px" }} />
        Single Calibration
      </Button>

      <Button onClick={handleStop} className='black-gray-white'>
        <PauseIcon className='icon3' style={{ margin: "0px 5px 0px 5px" }} />
        Stop Calibration
      </Button>
    </Container>
  );
}
const StartIcon = styled(FaPlay)`
  color: white;
  font-size: 18px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const PauseIcon = styled(FaPause)`
  color: white;
  font-size: 18px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 10px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 30px;
  }
`;

const Button = styled.button`
  background-color: #1abc9c;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: center;
  justify-content: center;
  padding: 10px;
  transition: background-color 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 15px;
  width: 30%;
  @media screen and (max-width: 900px) {
    width: 80%;
    font-size: 18px;
    padding: 5px;
  }

  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
  }
  &.gray-white-black {
    background-color: #ed7b00;
    color: white;
    border: 1px solid #ed7b00;
  }

  &.gray-white-black:hover {
    color: #ed7b00;
    background-color: white;
    border: 1px solid #ed7b00;
    .icon2 {
      color: #ed7b00;
    }
  }

  &.black-gray-white {
    background-color: #ea402f;
    color: #fff;
    border: 1px solid #ea402f;
  }

  &.black-gray-white:hover {
    color: #ea402f;
    background-color: #fff;
    border: 1px solid #ea402f;
    .icon3 {
      color: #ea402f;
    }
  }

  &.green-white {
    background-color: #349a77;
    color: #fff;
    border: 1px solid #349a77;
  }

  &.green-white:hover {
    color: #349a77;
    background-color: #fff;
    border: 1px solid #349a77;
    .icon1 {
      color: #349a77;
    }
  }
`;

export default Buttons;
