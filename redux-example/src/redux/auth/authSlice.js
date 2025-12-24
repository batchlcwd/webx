//Slice: it will help use to create actions,reducers

import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./authThunk";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
  },

  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.isAuthenticated = false;
        console.log(state.loading);
        state.user = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;

        state.isAuthenticated = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

//create actions
export const { login, logout } = authSlice.actions;

//create reducer
export default authSlice.reducer;
