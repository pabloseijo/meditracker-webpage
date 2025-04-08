import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [submitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 100); // 100 ms es suficiente para que el navegador capture los datos del form
  };
  

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

              <form
                action="https://formsubmit.co/socratessat@gmail.com"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
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
                        value={formData.name}
                        onChange={handleChange}
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
                        value={formData.email}
                        onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar Mensaje
                </button>
              </form>

              <iframe
                name="hidden_iframe"
                style={{ display: "none" }}
                title="Formulario de contacto oculto"
              />

              {submitted && (
                <div className="alert alert-success mt-3">
                  Mensaje enviado correctamente. Gracias por contactarnos.
                </div>
              )}

              <div className="col-md-12 text-center copyright">
                <p>
                  © {new Date().getFullYear()} <strong>Meditracker</strong>. Todos los derechos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
