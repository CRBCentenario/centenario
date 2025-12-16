
import React from "react";

export const AnaValentina = (props) => {
  return (
    <div id="liquors">
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-md-6">
            <div className="liquors-text">
              <h2>Ana Valentina</h2>
              <h3>2023-2025 </h3>
                <h3>Area de Interés: Desarrollo económico de la comunidad</h3>
              <div className="text-justify">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <p>
                   Subvención Distrital
                  </p>
                  <p>
                     Se ejecutó la Subvención Distrital en apoyo a la Fundación AnaValentina, ubicada en Ciudad Bolívar, proporcionando elementos para la labor agrícola. Para la
sostenibilidad de este proyectose les dotó de una máquina estampadora de camisetas, gorras, bolsos y demás artículos en tela, a fin de convertirla en una fuente de ingresos para la Fundación.
Igualmente, se hizo donación de una impresora y de materiales para estampación. En el mes de marzo se programó una visita en compañía del Club Rotario Bogotá Occidente y el Club Rotaract Centenario, que
también participó con la Subvención Distrital, a fin de compartir y ver de primera mano la ejecución de dicha Subvención.
                  </p>
                  <p>Puedes encontrar más información de la fundación en el siguiente link: 
                  <a href="https://www.anavalentina.org/" target="_blank" rel="noreferrer"> Fundación Ana Valentina</a></p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/anaV.png" className="img-responsive" alt="" style={{marginLeft:10, marginTop:100}}/>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
