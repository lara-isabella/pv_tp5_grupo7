import React from "react";
import { Link } from "react-router-dom";

function AcercaDe() {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Acerca de este sitio</h2>
      <p className="mt-3 fs-5">
        Esta es una aplicación React para administrar una lista de alumnos.
      </p>
      <p className="fs-5">
        En este trabajo estamos aplicando los recursos <strong>React Router</strong> y el framework <strong>Bootstrap</strong>.
      </p>
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <p className="fs-5">
                    React Router
                </p>
                <p>
                    React Router es una colección de componentes para navegación, que puedes integrar en tus apps de React. Con esta colección de componentes puedes modificar la URL de tu página web, reemplazar componentes dependiendo de la dirección en la que se encuentre el usuario y mucho más.
                </p>
                <p>
                    Extraido de: https://codigofacilito.com/articulos/react-router-spa
                </p>
            </div>
            <div className="col-md-6">
                <p className="fs-5">
                    Framework: Bootstrap
                </p>
                <p>
                    Bootstrap es un potente conjunto de herramientas frontend repleto de funcionalidades que nos ayudan a, como principalmente aplicamos en el este trabajo, moldear la apariencia de nuestra pagina en base a una estructura principalmente basada en contenedores con columnas y filas.
                </p>
                <p>
                    Un framework es una estructura sobre la que se puede desarrollar software. Sirve como base, por lo que no se empieza desde cero. Usar frameworks trae ventajas como ahorrar tiempo y reducir el riesgo de errores: no es necesario escribir todo desde cero, por lo que hay menos probabilidades de cometer errores.
                </p>
                <p>
                    Extraido de: https://getbootstrap.com/docs/5.3/getting-started/introduction/ y https://www.codecademy.com/resources/blog/what-is-a-framework/
                </p>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <Link className="btn btn-primary" to="/">Volver al inicio</Link>
      </div>
    </div>
  );
}

export default AcercaDe;
