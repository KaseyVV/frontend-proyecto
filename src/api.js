import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const obtenerJuegos = async () => {
  const res = await axios.get(`${API_URL}/juegos`);
  return res.data;
};

export const obtenerJuegoPorId = async (id) => {
  const res = await axios.get(`${API_URL}/juegos/${id}`);
  return res.data;
};

export const obtenerReseniasPorJuego = async (id) => {
  const res = await axios.get(`${API_URL}/resenias/${id}`)
  return res.data;
};

export const agregarResenia = async (id, nuevaResenia) => {
  const res = await axios.post(`${API_URL}/resenias/${id}`, nuevaResenia);
  return res.data;
};