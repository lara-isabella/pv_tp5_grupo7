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

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const soloLetrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;

  const validarLu = () => lu && lu > 0;
  const validarNombre = () => soloLetrasRegex.test(nombre);
  const validarApellido = () => soloLetrasRegex.test(apellido);
  const validarCurso = () => curso.trim() !== "";
  const validarEmail = () => emailRegex.test(email);
  const validarTelefono = () => telefono === "" || telefono.length >= 7;

  const manejarSubmit = (e) => {
    e.preventDefault();

    if (
      !validarLu() ||
      !validarNombre() ||
      !validarApellido() ||
      !validarCurso() ||
      !validarEmail() ||
      !validarTelefono()
    ) {
      setError("Por favor, complete correctamente todos los campos.");
      return;
    }

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

    const fueAgregado = alAgregar?.(nuevoAlumno);
    if (!fueAgregado) {
      setError(`El LU ${lu} ya existe. Ingrese un LU diferente.`);
      return;
    }

    setError("");
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
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#fff0f6" }}>
      <h1 className="mb-3 text-center" style={{ color: "#cc3366" }}>Agregar Nuevo Alumno</h1>
      {error && <p className="text-danger text-center fw-bold">{error}</p>}
      <form onSubmit={manejarSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">LU:</label>
          <input
            type="number"
            className={`form-control ${lu === "" ? "" : validarLu() ? "is-valid" : "is-invalid"}`}
            value={lu}
            onChange={(e) => setLu(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input
            type="text"
            className={`form-control ${nombre === "" ? "" : validarNombre() ? "is-valid" : "is-invalid"}`}
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido:</label>
          <input
            type="text"
            className={`form-control ${apellido === "" ? "" : validarApellido() ? "is-valid" : "is-invalid"}`}
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Curso:</label>
          <input
            type="text"
            className={`form-control ${curso === "" ? "" : validarCurso() ? "is-valid" : "is-invalid"}`}
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            className={`form-control ${email === "" ? "" : validarEmail() ? "is-valid" : "is-invalid"}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Domicilio:</label>
          <input
            type="text"
            className="form-control"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Teléfono:</label>
          <input
            type="number"
            placeholder="3881234567"
            className={`form-control ${telefono === "" ? "" : validarTelefono() ? "is-valid" : "is-invalid"}`}
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="estadoCheck"
            checked={estado}
            onChange={(e) => setEstado(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="estadoCheck">Activo</label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#f497b6", color: "white" }}
        >
          Agregar Alumno
        </button>
      </form>
    </div>
  );
}

export default IngresoAlumnos;
