import React from "react";
import { Link } from "react-router-dom";

function AcercaDe() {
    return (
    <div>
      <h2>Acerca de este sitio</h2>
      <p>Esta es una aplicación React para administrar una lista de alumnos. </p>
      <p>En este trabajo estamos aplicando los recursos React Router y Bootstrap.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}

export default AcercaDe;