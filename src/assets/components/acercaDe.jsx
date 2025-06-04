import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logogrupo7-removebg.png';

import lautaro from '../images/lautaro.jpg';
import lara from '../images/lara.jpg';
import tomas from '../images/tomas.jpg';
import luisana from '../images/luisana.jpg';
import yamila from '../images/yamila.jpg';

function AcercaDe() {
  return (
    <div className="container mt-5" style={{ backgroundColor: "#fff0f6" }}>
      <h2 className="text-center" style={{ color: "#cc3366" }}>Acerca de este sitio</h2>
      <p className="mt-3 fs-5">
        Esta es una aplicación React para administrar una lista de alumnos.
      </p>
      <p className="fs-5">
        En este trabajo estamos aplicando los recursos <strong>React Router</strong> y el framework <strong>Bootstrap</strong>.
      </p>

      <div className="container mt-5 rounded" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-md-6 rounded">
            <p className="fs-5 text-center"><strong>React Router</strong></p>
            <p>
              React Router es una colección de componentes para navegación, que puedes integrar en tus apps de React. Con esta colección de componentes puedes modificar la URL de tu página web, reemplazar componentes dependiendo de la dirección en la que se encuentre el usuario y mucho más.
            </p>
            <p>
              Extraído de: <a href="https://codigofacilito.com/articulos/react-router-spa" target="_blank" rel="noopener noreferrer">codigofacilito.com</a>
            </p>
          </div>
          <div className="col-md-6 rounded">
            <p className="fs-5 text-center"><strong>Bootstrap</strong></p>
            <p>
              Bootstrap es un potente conjunto de herramientas frontend repleto de funcionalidades que nos ayudan a, como principalmente aplicamos en este trabajo, moldear la apariencia de nuestra página en base a una estructura principalmente basada en contenedores con columnas y filas.
            </p>
            <p>
              Un framework es una estructura sobre la que se puede desarrollar software. Sirve como base, por lo que no se empieza desde cero. Usar frameworks trae ventajas como ahorrar tiempo y reducir el riesgo de errores.
            </p>
            <p>
              Extraído de: <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer">getbootstrap.com</a> y <a href="https://www.codecademy.com/resources/blog/what-is-a-framework/" target="_blank" rel="noopener noreferrer">codecademy.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h4 className="text-center mb-4">Integrantes y Contacto</h4>
        <div className="d-flex justify-content-center">
          <div className="d-flex overflow-auto" style={{ gap: "20px", padding: "10px", maxWidth: "100%" }}>
            <div className="text-center">
              <img src={lautaro} alt="Lautaro" className="rounded-circle mb-2" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
              <p><strong>Lautaro</strong></p>
              <p>@LauchaS2</p>
            </div>
            <div className="text-center">
              <img src={lara} alt="Lara" className="rounded-circle mb-2" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
              <p><strong>Lara</strong></p>
              <p>@lara-isabella</p>
            </div>
            <div className="text-center">
              <img src={tomas} alt="Tomás" className="rounded-circle mb-2" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
              <p><strong>Tomás</strong></p>
              <p>@TomiObeide</p>
            </div>
            <div className="text-center">
              <img src={luisana} alt="Luisana" className="rounded-circle mb-2" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
              <p><strong>Luisana</strong></p>
              <p>@lulipereira</p>
            </div>
            <div className="text-center">
              <img src={yamila} alt="Yamila" className="rounded-circle mb-2" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
              <p><strong>Yamila</strong></p>
              <p>@yamqp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <img src={logo} alt="Logo" style={{ width: "290px" }} />
      </div>

      <div className="d-flex justify-content-center mt-4 mb-4">
        <Link className="btn btn-primary" style={{ backgroundColor: "#f497b6", color: "white" }} to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default AcercaDe;
