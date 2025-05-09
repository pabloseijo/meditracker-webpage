import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { color } from "chart.js/helpers";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const adherenceLineData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep"],
    datasets: [
      {
        label: "Adherencia estándar",
        data: [50, 60, 55, 65, 70, 75, 78, 80, 82],
        backgroundColor: "#7ED6DF",
        fill: true,
        tension: 0.3
      },
      {
        label: "Adherencia prevista",
        data: [52, 61, 60, 66, 73, 78, 80, 82, 85],
        backgroundColor: "#4A90E2",
        fill: true,
        tension: 0.3
      }
    ]
  };

  const adherenceLineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top"
      }
    },
    scales: {
      y: {
        min: 30,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%"; // Añade el símbolo % a los valores del eje Y
          }
        }
      }
    }
  };

  const doughnutData = {
    labels: ["Dosis tomadas", "Dosis olvidadas"],
    datasets: [
      {
        data: [78, 22],
        backgroundColor: ["#4A90E2", "#ccc"],
        borderWidth: 1
      }
    ]
  };

  const dailyBarData = {
    labels: ["L", "M", "X", "J", "V", "S", "D"],
    datasets: [
      {
        label: "Tasa diaria",
        data: [80, 75, 78, 82, 85, 70, 65],
        backgroundColor: "#4A90E2"
      }
    ]
  };

  const dailyBarOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top"
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value + "%"; // Añade el símbolo % a los valores del eje Y
          }
        }
      }
    }
  };

  const groupedBarData = {
    labels: ["+8", "7-8", "5-6", "3-4", "1-2"],
    datasets: [
      {
        label: "Adherencia",
        data: [65, 80, 70, 60, 45],
        backgroundColor: "#4A90E2"
      }
    ]
  };
  
  const groupedBarOptions = {
    indexAxis: "y", // Cambia las barras a horizontales
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top"
      }
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%"; // Añade el símbolo % al eje X
          }
        }
      },
      y: {
        title: {
          display: true,
          text: "Rangos de dosis"
        }
      }
    }
  };

  const hospitalizationData = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep"],
    datasets: [
      {
        label: "Pacientes hospitalizados",
        data: [1127, 949, 792, 730, 664, 621, 576, 530, 481],
        backgroundColor: "#4A90E2",
        fill: false,
        tension: 0.3
      }
    ]
  };

  return (
    <section id="dashboard">
      <div className="section-title">
        <h2>Prototipo de Dashboard</h2>
        <p>Este es el panel de control que verán los profesionales sanitarios en la plataforma web de MediTracker. Desde aquí podrán monitorizar la adherencia al tratamiento de sus pacientes, detectar desviaciones, visualizar tendencias de hospitalización y tomar decisiones basadas en datos en tiempo real.</p>
      </div>
  
      <div className="dashboard">
        <div className="card adherencia">
          <h3>Estadísticas de adherencia</h3>
          <Doughnut data={doughnutData} />
          <p className="percentage">78%</p>
        </div>
        <div className="card tendencia">
          <h3>Análisis de tendencias</h3>
          <Line data={adherenceLineData} options={adherenceLineOptions} />
        </div>
        <div className="card ahorro">
          <h3>Ahorro</h3>
          <p className="money">1.280.000 €</p>
        </div>
        <div className="card diaria">
          <h3>Tasa de adherencia diaria</h3>
          <Bar data={dailyBarData} options={dailyBarOptions} />
        </div>
        <div className="card dosis">
          <h3>Tasa de adherencia diaria</h3>
          <h4>Agrupados por dosis diarias</h4>
          <Bar data={groupedBarData} options={groupedBarOptions} />
        </div>
        <div className="card hospitalizaciones">
          <h3>Hospitalizaciones</h3>
          <Line data={hospitalizationData} />
        </div>
      </div>
    </section>
  );
  
}