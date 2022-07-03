import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "getalluser",
  async (object, { rejectWithValue }) => {
    try {
      const Users = await axios.get("/api/alluser");
      // console.log(Posts.data);
      return Users.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const initialState = {
  Users: [],
  loading: false,
  isSuccess: false,
  message: "",
};
const userSlice = createSlice({
  name: "Posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
      state.message = "Đang tải dữ liệu!!!";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Users = payload;
      state.isSuccess = true;
      state.message = "Done!!!";
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default userSlice;
