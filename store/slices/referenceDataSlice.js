import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Select Reference Data",
      value: "option1",
    },
    {
      label: "ref_data_1",
      value: "option2",
    },
    { label: "ref_data_2", value: "option3" },
    { label: "ref_data_3", value: "option4" },
    { label: "ref_data_4", value: "option5" },
    { label: "ref_data_5", value: "option6" },
    { label: "ref_data_6", value: "option7" },
  ],
};

export const referenceDataSlice = createSlice({
  name: "referenceData",
  initialState,
  reducers: {
    //Actions
    setItems: (state, action) => {
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
  },
});

export const { setItems } = referenceDataSlice.actions;

//Selectors
export const selectItems = (state) => state.referenceData.items;

export default referenceDataSlice.reducer;
