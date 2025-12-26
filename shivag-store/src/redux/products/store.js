import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "@/services/productApi";

export const productStore = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
