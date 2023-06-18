import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  referenceDataItems: [],
};

export const referenceDataSlice = createSlice({
  name: "referenceData",
  initialState,
  reducers: {
    //Actions
    setReferenceDataItems: (state, action) => {
      console.log("action", action.payload);
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
  },
  // {
  //   //Actions
  //   setItems: (state, action) => {
  //     const labelExists = state.items.some(
  //       (item) => item.label === action.payload
  //     );

  //     if (!labelExists) {
  //       const newItem = {
  //         label: action.payload,
  //         value: `option${state.items.length + 1}`,
  //       };
  //       state.items.push(newItem);
  //     }
  //   },
  // },
});

export const {
  setReferenceDataItems,
  removeReferenceDataItem,
  setDropdownItem,
  getDropdownItem,
} = referenceDataSlice.actions;

//Selectors
export const selectReferenceDataItems = (state) =>
  state.referenceData.referenceDataItems;
export const selectDropdownItem = (state) => state.referenceData.dropDownItem;

export default referenceDataSlice.reducer;
