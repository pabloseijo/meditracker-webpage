import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nuestro equipo</h2>
          <p>
            Personas comprometidas con la salud digital del futuro.
          </p>
        </div>
       <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-sm-6 col-md-3 team">
                  <div className="team-border">
                    <div className="thumbnail">
                      <div className="image-container">
                        <img src={d.img} alt={d.name} className="team-img" />
                      </div>
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>

                        {d.stack && d.stack.length > 0 ? (
                            <div className="stack-icons">
                              {d.stack.map((tech, idx) => {
                                if (tech.toLowerCase() === "kotlin") {
                                  const kotlinUrl = `${process.env.PUBLIC_URL}/kotlin.svg`;
                                  return (
                                    <span
                                      key={idx}
                                      className="tech-img-icon"
                                      title="Kotlin"
                                      style={{
                                        maskImage: `url(${kotlinUrl})`,
                                        WebkitMaskImage: `url(${kotlinUrl})`,
                                      }}
                                    />
                                  );
                                }
                                

                                return (
                                  <i
                                    key={idx}
                                    className={`fab fa-${tech.toLowerCase()}`}
                                    title={tech}
                                  ></i>
                                );
                              })}
                            </div>
                          ) : (
                            <div className="stack-icons" style={{ height: "25px" }}></div>
                        )}


                        {d.linkedin && (
                          <div className="socials">
                            <a href={d.linkedin} target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-linkedin"></i>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
