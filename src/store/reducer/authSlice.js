import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: () => {
    const token = localStorage.getItem("token");
    //user也可在後面再取得
    const user = localStorage.getItem("user");

    if (!token) {
      return {
        isLogged: false,
        token: null,
        user: null,
      };
    }

    return {
      isLogged: true,
      token: token,
      user: JSON.parse(user),
    };
  },
  reducers: {
    login(state, action) {
      state.isLogged = true;
      state.token = action.payload.token;
      state.user = action.payload.user;

      //將資料存入localStorage
      localStorage.setItem("token", state.token);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state, action) {
      state.isLogged = false;
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
