import React from "react";
import { useParams, Link } from "react-router-dom";

function DetalleAlumno({ alumnos }) {
  const { id } = useParams(); 
  const alumno = alumnos.find((a) => String(a.lu) === String(id)); 

  if (!alumno) {
    return (
      <div>
        <h2>Alumno no encontrado</h2>
        <Link to="/alumnos">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalle del Alumno: {alumno.nombre} {alumno.apellido}</h2>
      <p><strong>LU:</strong> {alumno.lu}</p>
      <p><strong>Curso:</strong> {alumno.curso}</p>
      <p><strong>Email:</strong> {alumno.email}</p>
      <p><strong>Domicilio:</strong> {alumno.domicilio}</p>
      <p><strong>Teléfono:</strong> {alumno.telefono}</p>
      <p><strong>Estado:</strong> {alumno.estado ? "Activo" : "Inactivo"}</p>
      <Link to="/alumnos">Volver a la lista</Link>
    </div>
  );
}

export default DetalleAlumno;

