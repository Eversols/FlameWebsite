import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Services/store/index.js";
import { Suspense } from "react";
import Loader from "./Components/Loader";
import { IntercomProvider } from 'react-use-intercom';
import { I18nextProvider } from "react-i18next";
import i18n from "./Services/i18n/index.js";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 610,
      md: 1024,
      lg: 1440,
      xl: 1636,
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <IntercomProvider appId="tiwvt5ao" autoBoot={false}>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <Router>
            <Provider store={store}>
              {/* <PersistGate loading={null} persistor={persistor}> */}
                <I18nextProvider i18n={i18n}>
                <App />
                </I18nextProvider>
              {/* </PersistGate> */}
            </Provider>
          </Router>
        </StyledEngineProvider>
      </ThemeProvider>
    </IntercomProvider>
  </Suspense>
);
