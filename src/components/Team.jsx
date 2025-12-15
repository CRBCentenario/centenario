import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-12 col-md-offset-2 section-title">
          <h2>Nuestros socios</h2>
          <p>
            Nuestro club cuenta con la participación de 26 socios activos.
            Acontinuación presentamos la junta directiva del 2025
          </p>
        </div>
        <div id="fotos" className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  <div className="thumbnail">
                    <img src={d.img} alt="..." className="team-img"  style={{height:270}}/>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
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
