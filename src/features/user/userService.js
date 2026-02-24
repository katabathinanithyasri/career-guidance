import axios from "@/services/axiosInstance";

export const fetchUserProfile = async () => {
  const res = await axios.get("/user/profile");
  return res.data;
};