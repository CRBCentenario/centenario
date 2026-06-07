import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">{/*#6372ff 0%, #5ca9fb*/}
      <div className="container">
        <div className="section-title">
          <h2>Áreas de servicio</h2>
          <p>
            Rotary funciona por áreas de interés y los proyectos que realizamos se enmarcan en una o más áreas de interés.
          </p>
          <div style={{marginLeft: '25%'}}>
          <img src="img/areas.png" className="img-responsive" alt="" style={{maxWidth:500, maxHeight:500}}/>{" "}
          </div>
          <h3>
            A continuación podras ver algunos de nuestros proyectos
          </h3>
        </div>
      </div>
    </div>
  );
};
