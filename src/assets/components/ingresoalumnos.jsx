import React, { useState } from "react";
import "../../App.css"; 

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

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!lu || !nombre || !apellido || !curso || !email) {
      setError("Por favor complete todos los campos obligatorios.");
      return;
    }
    setError("");

    const nuevoAlumno = { lu, nombre, apellido, curso, email, domicilio, telefono, estado };
    alAgregar?.(nuevoAlumno);
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setLu(""); setNombre(""); setApellido(""); setCurso(""); setEmail("");
    setDomicilio(""); setTelefono(""); setEstado(true);
  };

  return (
    <div className="form-container">
      <h1>Agregar Nuevo Alumno</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={manejarSubmit}>
        <div className="form-group">
          <label>LU:</label>
          <input type="text" value={lu} onChange={(e) => setLu(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Apellido:</label>
          <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Curso:</label>
          <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Domicilio:</label>
          <input type="text" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Teléfono:</label>
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Estado:</label>
          <input type="checkbox" checked={estado} onChange={(e) => setEstado(e.target.checked)} />
          Activo
        </div>
        <button type="submit" className="form-button">Agregar Alumno</button>
      </form>
    </div>
  );
}

export default IngresoAlumnos;
