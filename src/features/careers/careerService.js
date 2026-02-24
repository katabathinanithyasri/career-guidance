import axios from "@/services/axiosInstance";

export const fetchCareers = async () => {
  const res = await axios.get("/careers");
  return res.data;
};