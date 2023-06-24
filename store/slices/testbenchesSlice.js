import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
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
      state.selectedTestbench = action.payload;
    },
    cleanAllTestbenchesState: (state) => {
      state.items = []; // Set items array to an empty array;
    },
  },
});

export const { removeTestbenchItem } = testbenchesSlice.actions;
export const { setTestbenchItems, setTestbench, cleanAllTestbenchesState } =
  testbenchesSlice.actions;

export const selectTestbenchItems = (state) => state.testbenches.items;
export const selectedTestbench = (state) => state.testbenches.selectedTestbench;

export default testbenchesSlice.reducer;
