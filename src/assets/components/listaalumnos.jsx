import { Link } from "react-router-dom";
import EliminarAlumno from "./eliminaralumno";

function ListaAlumnos({ alumnos, setAlumnos, setMensaje }) {
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      {alumnos.length === 0 ? (
        <p>No hay alumnos cargados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Detalle</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {alumnos.map((alumno) => (
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <Link to={`/alumno/${alumno.lu}`}>Ver detalle</Link>
                </td>
                <td>
                  <Link to={`/alumno/${alumno.lu}/editar`}>Editar</Link>
                </td>
                <td>
                  <EliminarAlumno
                    lu={alumno.lu}
                    alumnos={alumnos}
                    setAlumnos={setAlumnos}
                    setMensaje={setMensaje}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ListaAlumnos;
