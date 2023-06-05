import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Circuit1",
      value: "option1",
    },
    {
      label: "Circuit2",
      value: "option2",
    },
  ],
  testbenches: [
    {
      label: "Testbench1",
      value: "option1",
    },
    {
      label: "Testbench2",
      value: "option2",
    },
    {
      label: "Testbench3",
      value: "option3",
    },
  ],
};

export const modelNetlistSlice = createSlice({
  name: "modelNetlist",
  initialState,
  reducers: {
    //Actions
    setModelItems: (state, action) => {
      const labelExists = state.items.some(
        (item) => item.label === action.payload
      );

      if (!labelExists) {
        const newItem = {
          label: action.payload,
          value: `option${state.items.length + 1}`,
        };
        state.items.push(newItem);
      }
    },
    setTestbenchItems: (state, action) => {
      const labelExists = state.testbenches.some(
        (item) => item.label === action.payload
      );

      if (!labelExists) {
        const newItem = {
          label: action.payload,
          value: `option${state.testbenches.length + 1}`,
        };
        state.testbenches.push(newItem);
      }
    },
  },
});

export const { setModelItems } = modelNetlistSlice.actions;
export const { setTestbenchItems } = modelNetlistSlice.actions;

//Selectors
export const selectNetlistItems = (state) => state.modelNetlist.items;
export const selectTestbenchItems = (state) => state.modelNetlist.testbenches;

export default modelNetlistSlice.reducer;
