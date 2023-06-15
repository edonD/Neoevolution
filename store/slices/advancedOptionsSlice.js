import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Population Size",
      value: 100,
    },
    {
      label: "Number of Iterations",
      value: 1000,
    },
    {
      label: "Number of Iterations without improvemet",
      value: 100,
    },
    {
      label: "Good enough metric",
      value: 1e-6,
    },
  ],
};

export const advancedOptionsSlice = createSlice({
  name: "advancedOptions",
  initialState,
  reducers: {
    //Actions

    updateAdvancedOptionsItems: (state, action) => {
      console.log("action", action.payload);
      const { label, value } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.label === label ? { ...item, value: value } : item
        ),
      };
    },
  },
});

export const { updateAdvancedOptionsItems } = advancedOptionsSlice.actions;

export const getAdvancedOptionsDefaultValues = (state) =>
  state.advancedOptions.items;

export default advancedOptionsSlice.reducer;
