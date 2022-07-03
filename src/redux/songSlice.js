import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSongs = createAsyncThunk(
  "getallpost",
  async (object, { rejectWithValue }) => {
    try {
      const Songs = await axios.get("/api/getchart");
      // console.log(Songs.data);
      return Songs.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const initialState = {
  Songs: [],
  loading: false,
  isSuccess: false,
  message: "",
};
const songSlice = createSlice({
  name: "Songs",
  initialState,
  reducers: {},
  extraReducers: {
    [getSongs.pending]: (state, action) => {
      state.loading = true;
      state.message = "Đang tải dữ liệu!!!";
    },
    [getSongs.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.Songs = payload;
      state.isSuccess = true;
      state.message = "Done!!!";
    },
    [getSongs.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default songSlice;
