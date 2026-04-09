// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// ✅ Correct import path after cleaning services folder
import { loginUser, registerUser } from "@/services/authService"; 

// Login thunk
export const login = createAsyncThunk("auth/login", async (userData, { rejectWithValue }) => {
  try {
    const res = await loginUser(userData);
    return res;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

// Register thunk
export const register = createAsyncThunk("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const res = await registerUser(userData);
    return res;
  } catch (err) {
    return rejectWithValue(err.response?.data || err.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, loading: false, error: null },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      // Login cases
      .addCase(login.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      // Register cases
      .addCase(register.pending, (state) => { state.loading = true; state.error = null; })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;