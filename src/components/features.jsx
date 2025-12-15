import React from "react";

export const Features = (props) => {
  return (
    <div id="features">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Grupos - Programas</h2>
        </div>
        <div className="row" style={{marginBottom:50}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-4">
                  {" "}
                  <img src={d.img} alt="..." className="team-img"  style={{maxWidth:350 ,maxHeight:110}}/>
                  <h3>{d.title}</h3>
                  <p  className="text-justify" >{d.text}</p>
                  <br></br>
                  <p  className="text-justify" >{d.text2}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
