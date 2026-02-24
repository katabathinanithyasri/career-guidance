import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "./adminService";

export const getUsers = createAsyncThunk(
  "admin/getUsers",
  async () => await fetchUsers()
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    users: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default adminSlice.reducer;