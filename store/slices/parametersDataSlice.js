import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  parametersItems: [],
  dropDownItem: "",
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
          value: state.parametersItems.length + 1,
        };
        state.parametersItems.push(newItem);
        console.log("action", newItem);
      }
    },
    removeParameterItem: (state, action) => {
      const index = state.parametersItems.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {
        state.parametersItems.splice(index, 1);

        // Rearrange the value property of the remaining items
        state.parametersItems.forEach((item, idx) => {
          item.value = idx + 1;
          console.log("Items Value: ", item.value);
        });
      }
      console.log("Updated state:", current(state.parametersItems));
    },
    setDropdownItem: (state, action) => {
      state.dropDownItem = action.payload;
    },
    getDropdownItem: (state) => {
      return state.dropDownItem;
    },
  },
});

export const {
  setParameterItems,
  setDropdownItem,
  getDropdownItem,
  removeParameterItem,
} = parametersDataSlice.actions;

//Selectors
export const selectParametersItems = (state) =>
  state.parametersData.parametersItems;
export const selectDropdownItem = (state) => state.parametersData.dropDownItem;

export default parametersDataSlice.reducer;
