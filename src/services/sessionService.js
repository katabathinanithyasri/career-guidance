import axios from "axios";

const API_URL = "http://localhost:8080/api/sessions";

export const getSessions = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addSession = async (session) => {
  const res = await axios.post(API_URL, session);
  return res.data;
};

export const updateSession = async (id, session) => {
  const res = await axios.put(`${API_URL}/${id}`, session);
  return res.data;
};

export const deleteSession = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};