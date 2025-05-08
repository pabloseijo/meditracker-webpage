import React from "react";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export const ImpactStats = ({ data }) => {
  const stats = data?.highlights || [];
  const years = [1, 2, 3, 4, 5];

  const buildChartData = (key) =>
    years.map((year, i) => ({
      año: year,
      pesimista: data[key]?.pesimista[i],
      moderado: data[key]?.moderado[i],
      optimista: data[key]?.optimista[i],
    }));

  return (
    <section id="impact" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Impacto en Cifras</h2>
          <p style={{ maxWidth: "700px", margin: "0 auto", color: "var(--color-text-light)" }}>
            Estas métricas reflejan la evolución esperada del impacto de MediTracker en los próximos años, incluyendo crecimiento de usuarios, adopción institucional y mejora en la adherencia terapéutica.
            </p>
        </div>

        <div className="impact-grid">
          {stats.map((stat, i) => (
            <div key={i} className="impact-card">
              <i className={`fa ${stat.icon} fa-3x`} />
              <h3>
                <CountUp
                  end={stat.value}
                  duration={2}
                  prefix={stat.prefix || ""}
                  suffix={stat.suffix || ""}
                />
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="impact-charts-grid">
            {/* Gráfica 1: Clientes */}
            <div className="card-glow">
            <h4 className="chart-title">Crecimiento de Clientes</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 800, height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={buildChartData("clientesAcumulados")}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="año" label={{ value: "Año", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Clientes Acumulados", angle: -90, dx: -10 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingTop: 20 }} />
                    <Line dataKey="pesimista" stroke="#ff6b6b" name="Pesimista" />
                    <Line dataKey="moderado" stroke="#00b4d8" name="Moderado" />
                    <Line dataKey="optimista" stroke="#6c5ce7" name="Optimista" />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            </div>

            {/* Gráfica 2: Instituciones */}
            <div className="card-glow">
            <h4 className="chart-title">Instituciones Objetivo por Año</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 800, height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={buildChartData("instituciones")}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="año" label={{ value: "Año", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Instituciones", angle: -90, dx: -10 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingTop: 20 }} />
                    <Line dataKey="pesimista" stroke="#ff6b6b" name="Pesimista" />
                    <Line dataKey="moderado" stroke="#00b4d8" name="Moderado" />
                    <Line dataKey="optimista" stroke="#6c5ce7" name="Optimista" />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            </div>

            {/* Gráfica 3: Penetración */}
            <div className="card-glow">
            <h4 className="chart-title">Penetración de Mercado</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 800, height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={buildChartData("penetracion")}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="año" label={{ value: "Año", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Penetración (%)", angle: -90, dx: -10 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingTop: 20 }} />
                    <Line dataKey="pesimista" stroke="#ff6b6b" name="Pesimista" />
                    <Line dataKey="moderado" stroke="#00b4d8" name="Moderado" />
                    <Line dataKey="optimista" stroke="#6c5ce7" name="Optimista" />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            </div>

            {/* Gráfica 4: Usuarios activos */}
            <div className="card-glow">
            <h4 className="chart-title">Usuarios Activos</h4>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "100%", maxWidth: 800, height: "300px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={buildChartData("usuariosActivos")}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="año" label={{ value: "Año", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Usuarios Activos (en miles)", angle: -90, dx: -10 }} />
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" wrapperStyle={{ paddingTop: 20 }} />
                    <Line dataKey="pesimista" stroke="#ff6b6b" name="Pesimista" />
                    <Line dataKey="moderado" stroke="#00b4d8" name="Moderado" />
                    <Line dataKey="optimista" stroke="#6c5ce7" name="Optimista" />
                    </LineChart>
                </ResponsiveContainer>
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};
