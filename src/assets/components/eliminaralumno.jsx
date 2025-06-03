
const EliminarAlumno = ({ lu, alumnos, setAlumnos }) => {
  const handleEliminar = () => {
    const confirmar = window.confirm("¿Eliminar este alumno?");
    if (confirmar) {
      const nuevosAlumnos = alumnos.filter((alumno) => alumno.lu !== lu);
      setAlumnos(nuevosAlumnos);
    }
  };

  return <button onClick={handleEliminar}>Eliminar</button>;
};

export default EliminarAlumno;
