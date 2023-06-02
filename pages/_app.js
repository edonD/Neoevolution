import "../styles/globals.css";
import "primereact/resources/themes/md-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import "primeicons/primeicons.css"; // icons
import "primeflex/primeflex.css";
import { LayoutProvider } from "../Components/Login/context/layoutcontext";
import store from "../store/store";
import { Provider } from "react-redux";
import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </Provider>
  );
}

export default MyApp;
