import { configureStore } from "@reduxjs/toolkit";
import changeDirection from "./slices/directions";
export const store = configureStore({
  reducer: {
    changeDirection: changeDirection,
  },
});
