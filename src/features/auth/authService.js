// src/features/auth/authService.js
import axios from "@/services/axiosInstance";

// ✅ Login API
export const loginUser = async (data) => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};

// ✅ Register API
export const registerUser = async (data) => {
  const response = await axios.post("/auth/register", data);
  return response.data;
};