import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Testbench1.json",
      value: "option1",
    },
    {
      label: "Testbench2.json",
      value: "option2",
    },
    {
      label: "Testbench3.json",
      value: "option3",
    },
  ],
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
        };
        state.items.push(newItem);
      }
    },

    removeTestbenchItem: (state, action) => {
      state.items = state.items.filter((item) => item.label !== action.payload);
    },
  },
});

export const { removeTestbenchItem } = testbenchesSlice.actions;
export const { setTestbenchItems } = testbenchesSlice.actions;

export const selectTestbenchItems = (state) => state.testbenches.items;

export default testbenchesSlice.reducer;
