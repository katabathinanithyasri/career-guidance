import axios from "@/services/axiosInstance";

export const fetchUsers = async () => {
  const res = await axios.get("/admin/users");
  return res.data;
};