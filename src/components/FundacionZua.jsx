import React from "react";

export const FundacionZua = (props) => {
  return (
    <div id="liquors">
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-md-6">
            <div className="liquors-text">
              <h2>Fundación Zua</h2>
              <h3>2018-2025 </h3>
                <h3>Area de Interés: Alfabetización y educación básica</h3>
              <div className="text-justify">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <p>
                   El obejtivo de este proyecto buscaba la atención a 100 niños y jóvenes en tareas e investigación, clases de música, teatro, danza, deportes, becas universitarias, alimentación diaria y ayudas varias a las familias. El Club Rotario Bogotá Centenario inició con un apoyo económico fijo mensual al Programa de Música, mediante donaciones directas del Club Rotario Novato, California.
                  </p>
                  <p>
                     Se consolidó el plan de apoyo, mediante aportes directos provenientes del CR Novato California, para el fortalecimiento del proyecto de educación artística dirigido a cerca de 100
niños del Barrio Patio Bonito, comunidad vulnerable constituida en su mayoría por desplazados de la violencia.
En fecha 26 de septiembre se entregó una donación de instrumentos musica les, tales como guitarras corrientes y eléctricas, un amplificador, un órgano electrónico, una batería,maracas, flautas, raspas
y otros, para el grupo de música de niños y jóvenes.Igualmente se donaron algunos equipos como televisor y DVD.
                  </p>
                  <p>Con recursos donados por Clubes Rotarios de California y de Seattle, se hicieron refacciones y mejoras en las instalaciones de esta fundación, tales como acometida eléctrica, adecuación de salones para computadores, piso sala lectura y sala de música, dotación de cocina y compra de muebles,
al igual que la adquisición de 40 scomputadores.</p>
 <p>Puedes encontrar más información de la fundación en el siguiente link:</p>
                  <a href="https://fundacionzua.org/" target="_blank" > Fundación Zua</a>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/zua.jpg" className="img-responsive" alt="" style={{marginLeft:10, marginTop:30}}/>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
