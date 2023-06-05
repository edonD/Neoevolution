import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parametersItems: [
    {
      label: "parameter1",
      value: "option1",
    },
    {
      label: "parameter2",
      value: "option2",
    },
    {
      label: "parameter3",
      value: "option3",
    },
  ],
};

export const parametersDataSlice = createSlice({
  name: "parametersData",
  initialState,
  reducers: {
    //Actions
    setParameterItems: (state, action) => {
      const labelExists = state.parametersItems.some(
        (item) => item.label === action.payload
      );

      if (!labelExists) {
        const newItem = {
          label: action.payload,
          value: `option${state.parametersItems.length + 1}`,
        };
        state.parametersItems.push(newItem);
      }
    },
  },
});

export const { setParameterItems } = parametersDataSlice.actions;

//Selectors
export const selectParametersItems = (state) =>
  state.parametersData.parametersItems;

export default parametersDataSlice.reducer;
