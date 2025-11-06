import axios from "axios";

const API_URL = "http://localhost:3000/api/juegos";

export const obtenerJuegos = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const obtenerJuegoPorId = async (_id) => {
  const res = await axios.get(`${API_URL}/${_id}`);
  return res.data;
}