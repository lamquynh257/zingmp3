import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentUser: null,
      gettingUser: false,
      err: false,
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.gettingUser = true;
    },
    loginSuccess: (state, acction) => {
      state.login.gettingUser = false;
      state.login.currentUser = acction.payload;
      state.login.err = false;
    },
    loginFailed: (state) => {
      state.login.gettingUser = false;
      state.login.err = true;
    },
  },
});

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions;
export default authSlice;
