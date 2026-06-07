import React, { useEffect, useState } from "react";
import logo from '../logo.png'

export const Navigation = ({ onNavigate = () => {}, currentPage = "home" }) => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  useEffect(() => {
    const menuItems = document.querySelectorAll("#menu .navbar-nav > li");
    menuItems.forEach((item) => item.classList.remove("active"));

    if (currentPage === "nuevo-tab") {
      const projectsItem = document.querySelector("#menu .navbar-nav > li.dropdown");
      if (projectsItem) {
        projectsItem.classList.add("active");
      }
    }
  }, [currentPage]);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);

    if (target && typeof target.scrollIntoView === "function") {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    if (target && typeof window !== "undefined" && typeof window.scrollTo === "function") {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
      return;
    }

    if (sectionId === "header" && typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToSection = (event, sectionId) => {
    event.preventDefault();
    setProjectsOpen(false);

    if (currentPage === "nuevo-tab") {
      onNavigate("home");
      setTimeout(() => scrollToSection(sectionId), 0);
      return;
    }

    scrollToSection(sectionId);
  };

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
              <a
                href="#header"
                className="page-scroll"
                onClick={(event) => goToSection(event, "header")}
              >
                Inicio
              </a>
            </li>
           
            <li>
              <a href="#about" className="page-scroll" onClick={(event) => goToSection(event, "about")}>
                Nuestro club
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={(event) => goToSection(event, "team")}>
                Nuestros socios
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={(event) => goToSection(event, "services")}>
                Proyectos
              </a>
            </li>  
            <li
              className={`dropdown ${projectsOpen ? "open" : ""}`}
              onMouseEnter={() => setProjectsOpen(true)}
              onMouseLeave={() => setProjectsOpen(false)}
            >
              <a
                className="dropdown-toggle page-scroll"
                role="button"
                aria-haspopup="true"
                aria-expanded={projectsOpen}
                onClick={(event) => {
                  event.preventDefault();
                  setProjectsOpen((prev) => !prev);
                }}
              >
                2026 <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#services"
                    className="page-scroll"
                    onClick={(event) => {
                      event.preventDefault();
                      setProjectsOpen(false);
                      onNavigate("nuevo-tab");
                    }}
                  >
                    Mujeres Cafeteras
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#features" className="page-scroll" onClick={(event) => goToSection(event, "features")}>
                Grupos
              </a>
            </li>   
            <li>
              <a href="#portfolio" className="page-scroll" onClick={(event) => goToSection(event, "portfolio")}>
                Fotos
              </a>
            </li>
            {/* <li>
              <a href="#features" className="page-scroll">
                Características
              </a>
            </li>*/}
            <li>
              <a href="#contact" className="page-scroll" onClick={(event) => goToSection(event, "contact")}>
                Contáctenos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
