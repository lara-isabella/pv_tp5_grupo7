import { Link } from "react-router-dom";

function Papelera({ papelera, setAlumnos, setPapelera, setMensaje }) {
  const restaurarAlumno = (alumno) => {
    setAlumnos((prev) => [...prev, alumno]);
    setPapelera((prev) => prev.filter((a) => a.lu !== alumno.lu));
    setMensaje(`Alumno ${alumno.nombre} restaurado.`);
  };

  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#fff0f6" }}>
      <h2 className="mb-4 text-center" style={{ color: "#cc3366" }}>Papelera de Alumnos</h2>

      {papelera.length === 0 ? (
        <p className="text-center text-muted">No hay alumnos en la papelera.</p>
      ) : (
        <table className="table table-bordered table-hover text-center align-middle">
          <thead style={{ backgroundColor: "#ffc0cb", color: "#fff" }}>
            <tr>
              <th>LU</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Curso</th>
              <th>Restaurar</th>
            </tr>
          </thead>
          <tbody>
            {papelera.map((alumno) => (
              <tr key={alumno.lu}>
                <td>{alumno.lu}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido}</td>
                <td>{alumno.curso}</td>
                <td>
                  <button
                    className="btn btn-sm"
                    style={{ backgroundColor: "#e7a9c2", color: "white" }}
                    onClick={() => restaurarAlumno(alumno)}
                  >
                    Restaurar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-center mt-4">
        <Link to="/alumnos" className="btn btn-secondary">Volver</Link>
      </div>
    </div>
  );
}

export default Papelera;
