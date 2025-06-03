const EliminarAlumno = ({ lu, alumnos, setAlumnos, setPapelera, setMensaje }) => {
  const handleEliminar = () => {
    const confirmar = window.confirm("¿Eliminar este alumno? Se moverá a la papelera.");
    if (confirmar) {
      const alumnoEliminado = alumnos.find((a) => a.lu === lu);
      setPapelera((prev) => [...prev, alumnoEliminado]);
      const nuevosAlumnos = alumnos.filter((alumno) => alumno.lu !== lu);
      setAlumnos(nuevosAlumnos);
      setMensaje("Alumno enviado a la papelera.");
    }
  };

  return (
    <button
      onClick={handleEliminar}
      className="btn btn-sm"
      style={{ backgroundColor: "#ff5e7e", color: "white" }}
    >
      Eliminar
    </button>
  );
};

export default EliminarAlumno;
