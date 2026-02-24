import axios from "@/services/axiosInstance";

export const loginAPI = async (data) => {
  const response = await axios.post("/auth/login", data);
  return response.data;
};

export const registerAPI = async (data) => {
  const response = await axios.post("/auth/register", data);
  return response.data;
};