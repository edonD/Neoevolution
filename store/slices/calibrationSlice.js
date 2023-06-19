import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  referenceData: null,
  testbench: null,
  parametersData: null,
  netlist: null,
  advancedoptions: [],
};

const calibrationSlice = createSlice({
  name: "calibrationSlice",
  initialState,
  reducers: {
    setReferenceData: (state, action) => {
      state.referenceData = action.payload;
    },
    setTestBench: (state, action) => {
      state.testbench = action.payload;
    },
    setParametersData: (state, action) => {
      state.parametersData = action.payload;
    },
    setNetlist: (state, action) => {
      state.netlist = action.payload;
    },
    addAdvancedOption: (state, action) => {
      state.advancedoptions.push(action.payload);
    },
  },
});

export const {
  setReferenceData,
  setTestBench,
  setParametersData,
  setNetlist,
  addAdvancedOption,
} = calibrationSlice.actions;

// Selectors
export const selectReferenceData = (state) =>
  state.calibrationSlice.referenceData;
export const selectTestBench = (state) => state.calibrationSlice.testbench;
export const selectParametersData = (state) =>
  state.calibrationSlice.parametersData;
export const selectNetlist = (state) => state.calibrationSlice.netlist;
export const selectAdvancedOptions = (state) =>
  state.calibrationSlice.advancedoptions;

export default calibrationSlice.reducer;
