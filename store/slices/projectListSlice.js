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
      console.log(
        "Folder Inside action",
        folder,
        "date",
        lastModifiedDate,
        "time",
        lastModifiedTime
      );
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
    removeProjectItem: (state, action) => {
      const index = state.projects.findIndex(
        (item) => item.name === action.payload
      );

      if (index !== -1) {
        state.projects.splice(index, 1);
      }
    },
    renameProjectItem: (state, action) => {
      const { oldName, newName } = action.payload;

      // Find the project item with the old name
      const projectItem = state.projects.find((item) => item.name === oldName);

      if (projectItem) {
        // Update the name of the project item
        projectItem.name = newName;
      }
    },
    setCurrentProject: (state, action) => {
      console.log("Current Project", action.payload);
      state.currentProject = action.payload;
    },
    getCurrentProject: (state) => {
      return state.currentProject;
    },
    cleanAllStatesProject: () => {
      return initialState; // Reset the state to the initial state
    },
  },
});

export const {
  setProjectItem,
  removeProjectItem,
  setCurrentProject,
  getCurrentProject,
  cleanAllStatesProject,
  renameProjectItem,
} = projectListSlice.actions;

//Selectors
export const selectedProjects = (state) => state.projectList.projects;
export const currentProject = (state) => state.projectList.currentProject;

export default projectListSlice.reducer;
