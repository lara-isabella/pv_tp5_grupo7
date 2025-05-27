import React from "react";
import { Link } from "react-router-dom";

const alumnosEjemplo = [
  { lu: "APU001", nombre: "María", apellido: "Gómez", curso: "3°A" },
  { lu: "APU002", nombre: "Juan", apellido: "Pérez", curso: "2°B" },
];

function ListaAlumnos() {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          {alumnosEjemplo.map((alumno) => (
            <tr key={alumno.lu}>
              <td>{alumno.lu}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.apellido}</td>
              <td>{alumno.curso}</td>
              <td>
                <Link to={`/alumno/${alumno.lu}`}>Ver detalle</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaAlumnos;
