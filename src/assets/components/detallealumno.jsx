import React from "react";
import { useParams, Link } from "react-router-dom";

const alumnosEjemplo = [
  { lu: "APU001", nombre: "María", apellido: "Gómez", curso: "3°A", email: "maria@gmail.com", domicilio: "Calle 123", telefono: "12345678", estado: true },
  { lu: "APU002", nombre: "Juan", apellido: "Pérez", curso: "2°B", email: "juan@gmail.com", domicilio: "Calle 456", telefono: "87654321", estado: true },
];

function DetalleAlumno() {
  const { lu } = useParams();

  // Buscar alumno por LU
  const alumno = alumnosEjemplo.find(a => a.lu === lu);

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
