import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "./songSlice";
import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    Songs: songsReducer.reducer,
    Auth: authReducer.reducer,
  },
});
