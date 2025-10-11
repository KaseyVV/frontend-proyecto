import axios from "axios";

const API_URL = "http://localhost:3000";

export const obtenerJuegos = async () => {
  const res = await axios.get(`${API_URL}/juegos`);
  return res.data;
};
