// src/services/careerService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/careers";

export const getCareers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addCareer = async (career) => {
  const res = await axios.post(API_URL, career);
  return res.data;
};

export const updateCareer = async (id, career) => {
  const res = await axios.put(`${API_URL}/${id}`, career);
  return res.data;
};

export const deleteCareer = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};