import { Link } from "react-router-dom";
import EliminarAlumno from "./eliminaralumno";

function ListaAlumnos({ alumnos, setAlumnos, setMensaje, setPapelera }) {
  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#fff0f6" }}>
      <h2 className="mb-4 text-center" style={{ color: "#cc3366" }}>Lista de Alumnos</h2>

      {alumnos.length === 0 ? (
        <p className="text-center text-muted">No hay alumnos cargados.</p>
      ) : (
        <table className="table table-bordered table-hover text-center align-middle">
          <thead style={{ backgroundColor: "#ffb6c1", color: "#fff" }}>
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
                  <Link
                    to={`/alumnos/${alumno.lu}`}
                    className="btn btn-sm"
                    style={{ backgroundColor: "#f8c5d2", color: "#880044" }}
                  >
                    Ver detalle
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/alumnos/${alumno.lu}/editar`}
                    className="btn btn-sm"
                    style={{ backgroundColor: "#f497b6", color: "white" }}
                  >
                    Editar
                  </Link>
                </td>
                <td>
                  <EliminarAlumno
                    lu={alumno.lu}
                    alumnos={alumnos}
                    setAlumnos={setAlumnos}
                    setPapelera={setPapelera}
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

