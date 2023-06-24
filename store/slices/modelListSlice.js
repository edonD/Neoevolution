import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  currentModel: null,
};

export const modelListSlice = createSlice({
  name: "modelList",
  initialState,
  reducers: {
    //Actions
    setNewModeltItem: (state, action) => {
      const { folder, lastModifiedDate, lastModifiedTime } = action.payload;

      const labelExists = state.projects.some((item) => item.name === folder);

      if (!labelExists) {
        const newItem = {
          name: folder,
          value: state.projects.length + 1,
          date: lastModifiedDate,
          time: lastModifiedTime,
        };
        state.projects.push(newItem);
      }
      console.log("State", current(state.projects));
    },
    removeModelItem: (state, action) => {
      const index = state.projects.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {
        state.projects.splice(index, 1);
      }
    },
    setCurrentModel: (state, action) => {
      state.currentProject = action.payload;
    },
    getCurrentModel: (state) => {
      return state.currentProject;
    },
    cleanAllStates: () => {
      return initialState; // Reset the state to the initial state
    },
  },
});

export const {
  setNewModeltItem,
  removeModelItem,
  setCurrentModel,
  getCurrentModel,
  cleanAllStates,
} = modelListSlice.actions;

//Selectors
export const selectedModels = (state) => state.modelList.projects;
export const currentModel = (state) => state.modelList.currentProject;

export default modelListSlice.reducer;
