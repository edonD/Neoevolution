import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./slices/userSlice";
import referenceDataSlice from "./slices/referenceDataSlice";
import modelNetlistSlice from "./slices/modelNetlistSlice";
import parametersDataSlice from "./slices/parametersDataSlice";
import testbenchesSlice from "./slices/testbenchesSlice";
import headerIconSlice from "./slices/headerIconsSlice";
import advancedOptionsSlice from "./slices/advancedOptionsSlice";
import calibrationSlice from "./slices/calibrationSlice";

// config the store
const store = configureStore({
  reducer: {
    user: userSlice,
    referenceData: referenceDataSlice,
    modelNetlist: modelNetlistSlice,
    parametersData: parametersDataSlice,
    testbenches: testbenchesSlice,
    header: headerIconSlice,
    advancedOptions: advancedOptionsSlice,
    calibration: calibrationSlice,
  },
});

// export default the store
export default store;
