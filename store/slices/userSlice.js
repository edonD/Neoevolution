import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  usernameId: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsernameId: (state, action) => {
      state.usernameId = action.payload;
    },
  },
});

export const { setUser, setUsernameId } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;
export const selectUserNameId = (state) => state.user.usernameId;

export default userSlice.reducer;
