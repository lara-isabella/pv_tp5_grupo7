import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logogrupo7-removebg.png';

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
      <div className="container mt-5 rounded" style={{ backgroundColor: "white" }} >
        <div className="row">
            <div className="col-md-6 rounded">
                <p className="fs-5 text-center">
                    <strong> React Router </strong>
                </p>
                <br />
                <p>
                    React Router es una colección de componentes para navegación, que puedes integrar en tus apps de React. Con esta colección de componentes puedes modificar la URL de tu página web, reemplazar componentes dependiendo de la dirección en la que se encuentre el usuario y mucho más.
                </p>
                <br />
                <p>
                    Extraido de: https://codigofacilito.com/articulos/react-router-spa
                </p>
                <br />
            </div>
            <div className="col-md-6 rounded">
                <p className="fs-5 text-center">
                    <strong> Bootstrap </strong>
                </p>
                <br />
                <p>
                    Bootstrap es un potente conjunto de herramientas frontend repleto de funcionalidades que nos ayudan a, como principalmente aplicamos en el este trabajo, moldear la apariencia de nuestra pagina en base a una estructura principalmente basada en contenedores con columnas y filas.
                </p>
                <br />
                <p>
                    Un framework es una estructura sobre la que se puede desarrollar software. Sirve como base, por lo que no se empieza desde cero. Usar frameworks trae ventajas como ahorrar tiempo y reducir el riesgo de errores: no es necesario escribir todo desde cero, por lo que hay menos probabilidades de cometer errores.
                </p>
                <br />
                <p>
                    Extraido de: https://getbootstrap.com/docs/5.3/getting-started/introduction/ y https://www.codecademy.com/resources/blog/what-is-a-framework/
                </p>
            </div>
        </div>
      </div>
      <div className="container mt-5 rounded">
        <div className="row justify-content-center">
          <div className="col-md-5 rounded">
            <h5 className="text-center">Este trabajo fue realizado por el Grupo 7 de la Comisión Práctica 2, como parte de la materia Programación Visual.</h5>
            <br />
            <h6 className="text-center">El grupo consiste de los alumnos de la Escuela de Minas:</h6>
            <br />
            <p>Cari, Lautaro – @LauchaS2</p>
            <p>Colazo, Lara – @lara-isabella</p>
            <p>Obeide, Tomás – @TomiObeide</p>
            <p>Pereira, Luisana – @lulipereira</p>
            <p>Quipildor, Yamila – @yamqp</p>
          </div>
          <div className="col-md-5 rounded d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ width: "290px" }} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link className="btn btn-primary" style={{ backgroundColor: "#f497b6", color: "white" }} to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default AcercaDe;
