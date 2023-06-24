import "../styles/globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { LayoutProvider } from "../Components/Login/context/layoutcontext";
import store from "../store/store";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
