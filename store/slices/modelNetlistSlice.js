import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      label: "Circuit1.cir",
      value: "option1",
      key: "Modelkey1",
    },
    {
      label: "Circuit2.cir",
      value: "option2",
      key: "Modelkey2",
    },
  ],
  selectedModel: null,
};

export const modelNetlistSlice = createSlice({
  name: "modelNetlist",
  initialState,
  reducers: {
    //Actions
    setModelItems: (state, action) => {
      const labelExists = state.items.some(
        (item) => item.label === action.payload
      );

      if (!labelExists) {
        const newItem = {
          label: action.payload,
          value: `option${state.items.length + 1}`,
          key: `Modelkey${state.items.length + 1}`,
        };
        state.items.push(newItem);
      }
    },

    removeModelItem: (state, action) => {
      state.items = state.items.filter((item) => item.label !== action.payload);
    },
    setModel: (state, action) => {
      state.selectedModel = action.payload;
    },
  },
});
export const { setModelItems, setModel } = modelNetlistSlice.actions;
export const { removeModelItem } = modelNetlistSlice.actions;

//Selectors
export const selectNetlistItems = (state) => state.modelNetlist.items;
export const selectedModel = (state) => state.modelNetlist.selectedModel;

export default modelNetlistSlice.reducer;
