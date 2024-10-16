import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice/cartSlice.js";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};
