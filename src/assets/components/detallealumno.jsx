import React from "react";
import { useParams, Link } from "react-router-dom";
import "../../App.css"; 

const alumnosEjemplo = [
  { lu: "APU001", nombre: "María", apellido: "Gómez", curso: "3°A", email: "maria@gmail.com", domicilio: "Calle 123", telefono: "12345678", estado: true },
  { lu: "APU002", nombre: "Juan", apellido: "Pérez", curso: "2°B", email: "juan@gmail.com", domicilio: "Calle 456", telefono: "87654321", estado: false },
];

function DetalleAlumno() {
  const { lu } = useParams();

  const alumno = alumnosEjemplo.find(a => a.lu === lu);

  if (!alumno) {
    return (
      <div className="detalle-container">
        <h2 className="detalle-titulo">Alumno no encontrado</h2>
        <Link to="/alumnos" className="detalle-boton">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div className="detalle-container">
      <h2 className="detalle-titulo">Detalle del Alumno: {alumno.nombre} {alumno.apellido}</h2>
      <div className={`estado ${alumno.estado ? "activo" : "inactivo"}`}>
        {alumno.estado ? "Activo" : "Inactivo"}
      </div>
      <ul className="detalle-lista">
        <li><strong>LU:</strong> {alumno.lu}</li>
        <li><strong>Curso:</strong> {alumno.curso}</li>
        <li><strong>Email:</strong> {alumno.email}</li>
        <li><strong>Domicilio:</strong> {alumno.domicilio}</li>
        <li><strong>Teléfono:</strong> {alumno.telefono}</li>
      </ul>
      <Link to="/alumnos" className="detalle-boton">Volver a la lista</Link>
    </div>
  );
}

export default DetalleAlumno;
