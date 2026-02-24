import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCareers } from "./careerService";

export const getCareers = createAsyncThunk(
  "careers/getCareers",
  async () => await fetchCareers()
);

const careerSlice = createSlice({
  name: "careers",
  initialState: { list: [] },
  extraReducers: (builder) => {
    builder.addCase(getCareers.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export default careerSlice.reducer;