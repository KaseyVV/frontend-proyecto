import React, { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import "./EstadisticasPersonales.css";

const EstadisticasPersonales = () => {
  const [juegos, setJuegos] = useState([]);
  const [promedioHoras, setPromedioHoras] = useState(0);
  const [promedioPuntuacion, setPromedioPuntuacion] = useState(0);
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    const obtenerEstadisticas = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/juegos");
        const data = res.data;

        setJuegos(data);

        const horasTotales = data.reduce((acc, j) => acc + (j.horasJugadas || 0), 0);
        setPromedioHoras(data.length ? (horasTotales / data.length).toFixed(1) : 0);

        const puntuacionTotal = data.reduce((acc, j) => acc + (j.puntuacion || 0), 0);
        setPromedioPuntuacion(data.length ? (puntuacionTotal / data.length).toFixed(1) : 0);

        const conteoGeneros = {};
        data.forEach((j) => {
          if (j.genero) {
            const generosArray = Array.isArray(j.genero) ? j.genero : [j.genero];
            generosArray.forEach((g) => {
              conteoGeneros[g] = (conteoGeneros[g] || 0) + 1;
            });
          }
        });

        const generosData = Object.entries(conteoGeneros).map(([nombre, valor]) => ({
          nombre,
          valor,
        }));

        setGeneros(generosData);
      } catch (error) {
        console.error("Error al cargar estadísticas:", error);
      }
    };

    obtenerEstadisticas();
  }, []);

  const completados = juegos.filter((j) => j.completado).length;

  const COLORS = ["#00C49F", "#0088FE", "#FFBB28", "#FF8042", "#AF19FF"];

  return (
    <div className="estadisticas-container">
      <h2>📈 Estadísticas Personales</h2>

      <div className="estadisticas-resumen">
        <div className="card">
          <h3>Total de Juegos</h3>
          <p>{juegos.length}</p>
        </div>
        <div className="card">
          <h3>Juegos Completados</h3>
          <p>{completados}</p>
        </div>
        <div className="card">
          <h3>Promedio de Horas</h3>
          <p>{promedioHoras}</p>
        </div>
        <div className="card">
          <h3>Puntuación Media</h3>
          <p>{promedioPuntuacion} ⭐</p>
        </div>
      </div>

      <div className="grafico-generos">
        <h3>Géneros más jugados</h3>
        {generos.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={generos}
                dataKey="valor"
                nameKey="nombre"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {generos.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>No hay suficientes datos de géneros.</p>
        )}
      </div>
    </div>
  );
};

export default EstadisticasPersonales;
