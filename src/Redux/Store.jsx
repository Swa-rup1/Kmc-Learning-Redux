import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

// import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootreducer from "./Rootreducer";

const Store = configureStore({
  reducer: rootreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: [thunk],
      serializableCheck: false,
    }),
});

export const persistor = persistStore(Store);

export default Store;
