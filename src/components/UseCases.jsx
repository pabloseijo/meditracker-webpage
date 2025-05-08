import React from "react";

export const UseCases = () => {
  const cases = [
    {
      icon: "fa fa-hospital",
      title: "Hospitales Públicos",
      text: "Mejora la eficiencia hospitalaria mediante alertas tempranas y seguimiento remoto.",
    },
    {
      icon: "fa fa-clinic-medical",
      title: "Clínicas Privadas",
      text: "Optimiza el seguimiento postconsulta y fideliza a tus pacientes con tecnología avanzada.",
    },
    {
      icon: "fa fa-shield-alt",
      title: "Aseguradoras",
      text: "Reduce siniestralidad y mejora la gestión del riesgo con datos de adherencia en tiempo real.",
    },
    {
      icon: "fa fa-user-injured",
      title: "Pacientes Crónicos",
      text: "Facilita su autonomía con recordatorios personalizados y conectividad con profesionales.",
    },
  ];

  return (
    <div id="usecases" className="text-center">
        <div className="container">
            <div className="section-title">
            <h2>¿Para quién es MediTracker?</h2>
            </div>
            <div className="usecase-grid">
            {cases.map((item, i) => (
                <div key={i} className="usecase-card">
                <i className={`fa ${item.icon} fa-3x`}></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </div>
            ))}
            </div>
        </div>

        <a href="#contact" className="btn btn-custom btn-lg page-scroll">
        Empieza ya
        </a>
    </div>


  );
};
