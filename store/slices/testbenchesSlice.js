import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Testbench1.json",
      value: "option1",
      key: "TBkey1",
    },
    {
      label: "Testbench2.json",
      value: "option2",
      key: "TBkey2",
    },
    {
      label: "Testbench3.json",
      value: "option3",
      key: "TBkey3",
    },
  ],
  selectedTestbench: null,
};

export const testbenchesSlice = createSlice({
  name: "testbenches",
  initialState,
  reducers: {
    //Actions

    setTestbenchItems: (state, action) => {
      const labelExists = state.items.some(
        (item) => item.label === action.payload
      );

      if (!labelExists) {
        const newItem = {
          label: action.payload,
          value: `option${state.items.length + 1}`,
          key: `TBkey${state.items.length + 1}`,
        };
        state.items.push(newItem);
      }
    },

    removeTestbenchItem: (state, action) => {
      state.items = state.items.filter((item) => item.label !== action.payload);
    },

    setTestbench: (state, action) => {
      console.log("SETT", action.payload);
      state.selectedTestbench = action.payload;
    },
  },
});

export const { removeTestbenchItem } = testbenchesSlice.actions;
export const { setTestbenchItems, setTestbench } = testbenchesSlice.actions;

export const selectTestbenchItems = (state) => state.testbenches.items;
export const selectedTestbench = (state) => state.testbenches.selectedTestbench;

export default testbenchesSlice.reducer;
