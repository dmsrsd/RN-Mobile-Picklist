import { createSlice } from "@reduxjs/toolkit";
import { loginPosts } from "../actions";


const initialState = {
  status: "idle",
  error: null,
  user: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(loginPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;