import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Model",
      value: "option1",
    },
    {
      label: "NMOS-BSIM4",
      value: "option2",
    },
    { label: "PMOS-BSIM4", value: "option3" },
    { label: "PMOS-HiSIM", value: "option4" },
    { label: "NMOS-HiSIM", value: "option5" },
    { label: "Diode", value: "option6" },
    { label: "Resistor", value: "option7" },
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
