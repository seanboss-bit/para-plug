"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});


