import { createSlice } from "@reduxjs/toolkit";
import { getDataSalesman } from "../actions";

const initialState = {
  resSalesman: [],
  status: "idle",
  error: null,
};

const getSalesmanSlice = createSlice({
  name: "resSalesman",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDataSalesman.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getDataSalesman.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.resSalesman = action.payload;
      })
      .addCase(getDataSalesman.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getSalesmanSlice.reducer;
