import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
