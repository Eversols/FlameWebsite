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

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Loader />}>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Router>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
          </Provider>
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  </Suspense>
);
