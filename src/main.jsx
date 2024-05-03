import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import App from './App';
import { AppContextProvider } from "./Components/UserDashboard/ContextApi";
import { RouterProvider } from "react-router-dom";
import { MainRoute } from "./Components/Router/MainRouter";
import Store, { persistor } from "./Redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={"...loading"}>
      <Provider store={Store}>
        <PersistGate loading={"loading ..."} persistor={persistor}>
          <AppContextProvider>
            <RouterProvider router={MainRoute} />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
