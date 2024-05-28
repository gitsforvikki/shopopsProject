import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root.Reducer";

export const store = configureStore({
  reducer: rootReducer,
});
