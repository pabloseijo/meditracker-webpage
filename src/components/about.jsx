import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="text-center">
      <div className="container">
        {/* Sección Título */}
        <div className="section-title">
          <h2>¿Quiénes Somos?</h2>
          <div className="underline"></div>
        </div>

        {/* Descripción con palabras en negrita */}
        <div className="about-text">
        <p>
          Somos <strong>MediTracker</strong>, un equipo de seis estudiantes de <strong>Ingeniería Informática</strong> en la <strong>Universidad de Santiago de Compostela (USC)</strong>, comprometidos con una misión concreta: <strong>mejorar la adherencia terapéutica</strong> y <strong>optimizar la gestión sanitaria</strong> mediante <strong>soluciones digitales accesibles, seguras y escalables</strong>.
        </p>
        <p>
          Creemos en el <strong>potencial de la tecnología</strong> para <strong>transformar la atención sanitaria</strong>. Por ello, desarrollamos una <strong>plataforma</strong> que conecta a <strong>pacientes, cuidadores y profesionales de la salud</strong>, facilitando el <strong>seguimiento de tratamientos médicos</strong> en tiempo real y <strong>reduciendo los costes derivados de la falta de adherencia</strong>.
        </p>
        <p>
          Nos especializamos en el <strong>diseño e implementación de soluciones B2B</strong> orientadas a <strong>hospitales, aseguradoras y centros sociosanitarios</strong>, integrando <strong>estándares informáticos del sector salud</strong> y funcionalidades adaptadas a <strong>usuarios mayores o con discapacidad</strong>. Nuestro objetivo es claro: <strong>ofrecer herramientas inteligentes</strong> que fortalezcan los sistemas sanitarios y <strong>mejoren la calidad de vida</strong> de las personas.
        </p>
        <p>
          <strong>El futuro de la salud</strong> pasa por la <strong>digitalización responsable</strong>. Con <strong>MediTracker</strong>, damos un paso decisivo hacia una <strong>sanidad más eficiente, humana y sostenible</strong>.
        </p>

        </div>

        {/* Subtítulo "Por qué elegirnos" */}
        <div className="section-title">
          <h3>¿Por qué elegirnos?</h3>
          <div className="underline"></div>
        </div>

        {/* Beneficios en dos columnas */}
        <div className="row">
          <div className="col-md-12 text-center">
            <ul className="about-list">
              {props.data
                ? props.data.Why.map((d, i) => (
                    <li key={`${d}-${i}`}>
                      <i className="fa fa-check-circle"></i> {d.split(" ")[0]} {d.substring(d.indexOf(" "))}
                    </li>
                  ))
                : "Cargando..."}
            </ul>
          </div>
        </div>
        <a
          href="#contact"
          className="btn btn-custom btn-lg page-scroll"
        >
          Empieza ya
        </a>{" "}
      </div>
    </div>
  );
};
