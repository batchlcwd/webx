import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
const authStore = configureStore({
  reducer: authReducer,
});

export default authStore;
