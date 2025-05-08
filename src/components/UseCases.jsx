import React from "react";

export const UseCases = (props) => {
  const cases = props.data || []; // Usa data si viene como prop, si no deja un array vacío

  return (
    <div id="usecases" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>¿Para quién es MediTracker?</h2>
        </div>

        <div className="usecase-grid">
          {cases.length > 0 ? (
            cases.map((item, i) => (
              <div key={i} className="usecase-card">
                <i className={`fa ${item.icon} fa-3x`}></i>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))
          ) : (
            <p>Cargando casos de uso...</p>
          )}
        </div>

        <a href="#contact" className="btn btn-custom btn-lg page-scroll">
          Empieza ya
        </a>
      </div>
    </div>
  );
};
