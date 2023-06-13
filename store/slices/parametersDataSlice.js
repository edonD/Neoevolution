import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parametersItems: [
    {
      name: "parameter1",
      value: "option1",
    },
    {
      name: "parameter2",
      value: "option2",
    },
    {
      name: "parameter3",
      value: "option3",
    },
  ],
  dropDownItem: "parameters.csv",
};

export const parametersDataSlice = createSlice({
  name: "parametersData",
  initialState,
  reducers: {
    //Actions
    setParameterItems: (state, action) => {
      const labelExists = state.parametersItems.some(
        (item) => item.name === action.payload
      );

      if (!labelExists) {
        const newItem = {
          name: action.payload,
          value: `option${state.parametersItems.length + 1}`,
        };
        state.parametersItems.push(newItem);
        console.log("action", newItem);
      }
    },
    setDropdownItem: (state, action) => {
      state.dropDownItem = action.payload;
    },
    getDropdownItem: (state, action) => {
      return state.dropDownItem;
    },
  },
});

export const { setParameterItems, setDropdownItem, getDropdownItem } =
  parametersDataSlice.actions;

//Selectors
export const selectParametersItems = (state) =>
  state.parametersData.parametersItems;
export const selectDropdownItem = (state) => state.parametersData.dropDownItem;

export default parametersDataSlice.reducer;
