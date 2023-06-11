import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Reference Data",
      value: "empty",
    },
    {
      label: "Model",
      value: "empty",
    },
    {
      label: "Parameters",
      value: "empty",
    },
    {
      label: "Optimizer",
      value: "empty",
    },
    {
      label: "Results",
      value: "empty",
    },
  ],
};

export const headerIconSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    //Actions

    updateTestbenchItem: (state, action) => {
      const { label, value } = action.payload;
      const itemToUpdate = state.items.find((item) => item.label === label);
      if (itemToUpdate) {
        itemToUpdate.value = value;
      }
    },
  },
});

export const { updateTestbenchItem } = headerIconSlice.actions;

export const selectheaderIcon = (state) => state.header.items;

export default headerIconSlice.reducer;
