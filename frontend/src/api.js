import axios from "axios";

const API_URL = "http://localhost:3000";

export const obtenerJuegos = async () => {
  const res = await axios.get(`${API_URL}/juegos`);
  return res.data;
};

export const obtenerJuegoPorId = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
}