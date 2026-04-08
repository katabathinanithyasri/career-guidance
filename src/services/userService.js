import axios from "axios";

const API_URL = "http://localhost:8080/api/users";

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addUser = async (user) => {
  const res = await axios.post(API_URL, user);
  return res.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};