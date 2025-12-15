import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about2.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre nosotros:</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1: "loading..."}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Mision:</h2>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Vision:</h2>
              <p>{props.data ? props.data.paragraph3 : "loading..."}</p>
            </div>
          </div>
           <a
                  href="https://drive.google.com/file/d/1a_bTzofwiEQeVHAOoBdkZ4IjkNsBrPea/view?usp=share_link"
                  target="_blank" 
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Conoce nuestro Boletín #1
                </a>{" "}
        </div>
      </div>
    </div>
  );
};
