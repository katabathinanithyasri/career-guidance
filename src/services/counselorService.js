import axios from "axios";

const API_URL = "http://localhost:8080/api/counselors";

// ✅ Use the same name everywhere
export const getCounselors = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addCounselor = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateCounselor = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

export const deleteCounselor = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};