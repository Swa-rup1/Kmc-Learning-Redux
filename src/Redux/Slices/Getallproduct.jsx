//authSlices.jsx

import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../Services/LoginAction";


const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,


};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = { data: [] };
      state.userToken = null;
    },
  },

  extraReducers: (builder) => {
    //login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload;
        state.userToken = payload?.data?.token;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
    //register user reducer ...
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
