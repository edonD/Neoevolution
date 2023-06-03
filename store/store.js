import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";

// config the store
const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// export default the store
export default store;
