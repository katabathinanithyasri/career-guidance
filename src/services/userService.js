import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

// ✅ Fetch all users
export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// ✅ Add a new user
export const addUser = async (data) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

// ✅ Update an existing user
export const updateUser = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data);
  return res.data;
};

// ✅ Delete a user
export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// ✅ Fetch logged-in user profile (optional)
export const fetchUserProfile = async () => {
  const res = await axios.get(`${API_URL}/profile`);
  return res.data;
};