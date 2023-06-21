import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  currentProject: null,
};

export const projectListSlice = createSlice({
  name: "projectList",
  initialState,
  reducers: {
    //Actions
    setProjectItem: (state, action) => {
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
    },
    removeProjectItem: (state, action) => {
      const index = state.projects.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {
        state.projects.splice(index, 1);
      }
    },
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
    getCurrentProject: (state) => {
      return state.currentProject;
    },
  },
});

export const {
  setProjectItem,
  removeProjectItem,
  setCurrentProject,
  getCurrentProject,
} = projectListSlice.actions;

//Selectors
export const selectedProjects = (state) => state.projectList.projects;
export const currentProject = (state) => state.projectList.currentProject;

export default projectListSlice.reducer;
