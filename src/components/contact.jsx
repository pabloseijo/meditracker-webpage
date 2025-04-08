import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Contact = (props) => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    let timeout;
    if (submitted) {
      timeout = setTimeout(() => {
        setSubmitted(false);
      }, 5000); // 5000 ms = 5 segundos
    }
    return () => clearTimeout(timeout);
  }, [submitted]);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <div className="section-title">
                <h2>Contacta con nosotros</h2>
              </div>

              <p className="contact-text">
                ¿Tienes alguna pregunta? ¿Quieres saber más sobre nuestros servicios? Estamos aquí para ayudarte. Mándanos un correo y resolveremos todas tus dudas.
              </p>

              {/* Formulario */}
              <form
                action="https://formsubmit.co/socratessat@gmail.com"
                method="POST"
                target="hidden_iframe"
                onSubmit={() => setSubmitted(true)}
                name="sentMessage"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Nuevo mensaje desde el formulario web" />

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nombre"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensaje"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar Mensaje
                </button>
              </form>

              {/* iframe oculto */}
              <iframe 
              name="hidden_iframe" 
              style={{ display: "none" }}
              title="Formulario de contacto oculto"
              />

              {/* Mensaje temporal */}
              {submitted && (
                <div className="alert alert-success mt-3">
                  Mensaje enviado correctamente. Gracias por contactarnos.
                </div>
              )}

              {/* Pie de página */}
              <div className="col-md-12 text-center copyright">
                <p>
                  © {new Date().getFullYear()} <strong>Meditracker</strong>. Todos los derechos reservados.
                </p>
              </div>
            </div> {/* .row */}
          </div> {/* .col-md-12 */}
        </div> {/* .container */}
      </div> {/* #contact */}
    </div>
  );
};
