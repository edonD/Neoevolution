import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./slices/userSlice";

// config the store
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// export default the store
export default store;
