//import { useState } from "react";
//import emailjs from "emailjs-com";
import React from "react";
/*
const initialState = {
  name: "",
  email: "",
  message: "",
};*/
export const Contact = (props) => {
  //const [{ name, email, message }, setState] = useState(initialState);
  //const [ messageSent, sentMessageSent] = useState('');

/*
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => {
    setState({ name: "", email: "", message:""})
  }

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(name, email, message);
    /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ 
    /*
    emailjs
      .sendForm("service_ba599za", "template_4eno7cs", e.target, "04JJNMUbPFCHIdZsf")
      .then(
        (result) => {
          console.log(result.text);
          sentMessageSent('Mensaje enviado correctamente, nos contactaremos con usted lo más pronto posible. Gracias por confiar en nosotros.')
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }*/
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-5">
            <h3>Contáctanos</h3>
            <p style={{marginTop:0}}> 
              Nos reunimos los miercoles 6:30 pm 
            </p>
            <div style={{marginLeft:'20%'}}>
            <img src="img/foto3.jpg"  style={{width:400}}className="img-responsive" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Información de contacto</h3>
            </div>
           <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Celular de contacto
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-instagram"></i> Instagram
                </span>{" "}
                {props.data ? props.data.instagram : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope"></i> Correo
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Lugar
                </span>
               Bogotá, Colombia
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                 <img src="img/logo.png"  style={{width:300, marginLeft:'33%'}} className="img-responsive" alt="" />
                 </ul>
                {/*<ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : "/"}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 | Rotarios Bogotá Centenario | Desarollado por: Gabriela Camargo 
            {/*<a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>*/}
          </p>
        </div>
      </div>
    </div>
  );
};
