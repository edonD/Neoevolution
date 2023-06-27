import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  referenceDataItems: [],
  dropDownItem: "",
};

export const referenceDataSlice = createSlice({
  name: "referenceData",
  initialState,
  reducers: {
    //Actions
    setReferenceDataItems: (state, action) => {
      const labelExists = state.referenceDataItems.some(
        (item) => item.name === action.payload
      );

      if (!labelExists) {
        const newItem = {
          name: action.payload,
          value: state.referenceDataItems.length + 1,
        };
        state.referenceDataItems.push(newItem);
      }
    },
    removeReferenceDataItem: (state, action) => {
      const index = state.referenceDataItems.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {
        state.referenceDataItems.splice(index, 1);
      }
    },
    setDropdownItem: (state, action) => {
      state.dropDownItem = action.payload;
    },
    getDropdownItem: (state) => {
      return state.dropDownItem;
    },
    cleanAllStatesReferenceData: () => {
      return initialState; // Reset the state to the initial state
    },
  },
});

export const {
  setReferenceDataItems,
  removeReferenceDataItem,
  setDropdownItem,
  getDropdownItem,
  cleanAllStatesReferenceData,
} = referenceDataSlice.actions;

//Selectors
export const selectReferenceDataItems = (state) =>
  state.referenceData.referenceDataItems;
export const selectedReferenceData = (state) =>
  state.referenceData.dropDownItem;

export default referenceDataSlice.reducer;
