import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function IngresoAlumnos({ alAgregar }) {
  const [lu, setLu] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [curso, setCurso] = useState("");
  const [email, setEmail] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (!lu || !nombre || !apellido || !curso || !email) {
      setError("Por favor complete todos los campos obligatorios.");
      return;
    }

    setError("");

    const nuevoAlumno = {
      lu,
      nombre,
      apellido,
      curso,
      email,
      domicilio,
      telefono,
      estado,
    };

    alAgregar?.(nuevoAlumno);
    limpiarFormulario();
    navigate("/alumnos");
  };

  const limpiarFormulario = () => {
    setLu("");
    setNombre("");
    setApellido("");
    setCurso("");
    setEmail("");
    setDomicilio("");
    setTelefono("");
    setEstado(true);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Agregar Nuevo Alumno</h1>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={manejarSubmit}>
        <div className="mb-3">
          <label className="form-label">LU:</label>
          <input type="number" className="form-control" value={lu} onChange={(e) => setLu(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Curso:</label>
          <input type="text" className="form-control" value={curso} onChange={(e) => setCurso(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Domicilio:</label>
          <input type="text" className="form-control" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono:</label>
          <input type="number" placeholder="388 123-4567" className="form-control" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" id="estadoCheck" checked={estado} onChange={(e) => setEstado(e.target.checked)} />
          <label className="form-check-label" htmlFor="estadoCheck">Activo</label>
        </div>
        <button type="submit" className="btn btn-primary">Agregar Alumno</button>
      </form>
    </div>
  );
}

export default IngresoAlumnos;

