import React from "react";
import { useParams, Link } from "react-router-dom";

function DetalleAlumno({ alumnos }) {
  const { lu } = useParams();
  const alumno = alumnos.find((a) => a.lu === lu);

  if (!alumno) {
    return (
      <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#fff0f6" }}>
        <h2 className="text-center text-muted">Alumno no encontrado</h2>
        <Link to="/alumnos">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#fff0f6" }}>
      <h2 className="mb-3 text-center" style={{ color: "#cc3366" }} >Detalle del Alumno:</h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Nombre Completo:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
      <p><strong>Estado:</strong> {alumno.estado ? "Activo" : "Inactivo"}</p>
      <div className="d-flex justify-content-center mt-3">
        <Link className="btn btn-primary" style={{ backgroundColor: "#f497b6", color: "white" }} to="/alumnos">Volver a la Lista</Link>
      </div>
    </div>
  );
}

export default DetalleAlumno;
