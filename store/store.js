import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "./slices/userSlice";
import referenceDataSlice from "./slices/referenceDataSlice";
import modelNetlistSlice from "./slices/modelNetlistSlice";
import parametersDataSlice from "./slices/parametersDataSlice";
import testbenchesSlice from "./slices/testbenchesSlice";
import headerIconSlice from "./slices/headerIconsSlice";
import advancedOptionsSlice from "./slices/advancedOptionsSlice";
import calibrationSlice from "./slices/calibrationSlice";
import projectListSlice from "./slices/projectListSlice";
import modelListSlice from "./slices/modelListSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  referenceData: referenceDataSlice,
  modelNetlist: modelNetlistSlice,
  parametersData: parametersDataSlice,
  testbenches: testbenchesSlice,
  header: headerIconSlice,
  advancedOptions: advancedOptionsSlice,
  calibration: calibrationSlice,
  projectList: projectListSlice,
  modelList: modelListSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// config the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: [],
});

// export default the store
export const persistor = persistStore(store);
export default store;
