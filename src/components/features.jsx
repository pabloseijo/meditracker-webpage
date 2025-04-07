import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        {/* Sección de título */}
        <div className="row">
          {/* Ajusta el título en la misma fila si lo deseas */}
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>¿POR QUÉ MEDITRACKER?</h2>
          </div>
        </div>

        {/* Sección de iconos + texto */}
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-12 col-md-6 col-lg-3">
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      {/* Botón de llamada a la acción */}
      <a href="#contact" className="btn btn-custom btn-lg page-scroll">
        Empieza ya
      </a>
    </div>
  );
};
