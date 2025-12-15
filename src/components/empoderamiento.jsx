import React from "react";

export const Empoderamiento = (props) => {
  return (
    <div id="empoderamiento">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/picture1.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="empoderamiento-text">
              <h2>Niñas empoderadas para alcanzar sus sueños</h2>
              <h3>2022-2024 </h3>
                <h3>Area de Interés: Paz y resolución de conflictos </h3>
              <div className="text-justify">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <p>
El objetivo de este proyecto es de desarrollar espacios de encuentro, formación y capacitación con el enfoque de una “ESCUELA DE LIDERAZGO" para favorecer el EMPODERAMIENTO de niñas, adolescentes y jóvenes de las comunidades vulnerables de San Isidro y Ciudad Bolívar en Bogotá y en Subachoque, municipio de Cundinamarca. La subvención tiene un Presupuesto aprobado en USD de 45.790 que, con tasa de cambio 1 USD = 3.880 COP, corresponden a 177 665 200 pesos colombianos. El apoyo financiero del distrito rotario 5030 de EEUU fue determinante para conseguir la financiación del proyecto, y de igual manera la contribución del Club Rotario University distrito de Seattle. En particular cabo resaltar, el papel gigante de nuestra gran amiga rotaria Paula Laschober, quien se encargo de promover este proyecto en su club Rotario, su distrito y otros clubes rotarios de EEUU que contribuyeron donaciones para la financiación de la subvención. El proyecto está en su fase final.
                  </p>
                </div>
               {/* <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
