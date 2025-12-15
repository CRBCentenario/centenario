import React from "react";
import logo from '../logo.png'
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <img src={logo} style={{width:190, height:70}}  />
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            
            <li>
              <a href="#header" className="page-scroll">
                Inicio
              </a>
            </li>
           
            <li>
              <a href="#about" className="page-scroll">
                Nuestro club
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Nuestros socios
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Proyectos
              </a>
            </li> 
            <li>
              <a href="#features" className="page-scroll">
                Grupos
              </a>
            </li>   
            <li>
              <a href="#portfolio" className="page-scroll">
                Fotos
              </a>
            </li>
            {/* <li>
              <a href="#features" className="page-scroll">
                Características
              </a>
            </li>*/}
            <li>
              <a href="#contact" className="page-scroll">
                Contáctenos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
