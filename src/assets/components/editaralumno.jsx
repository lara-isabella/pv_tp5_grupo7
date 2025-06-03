import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarAlumno({ alumnos, setAlumnos }) {
  const { lu } = useParams(); 
  const navigate = useNavigate();

  //Buscar alumno con Libreta Universitaria
  const alumno = alumnos.find((a) => a.lu === lu);

  const [formData, setFormData] = useState({
    lu: "",
    nombre: "",
    apellido: "",
    curso: "",
    email: "",
    domicilio: "",
    telefono: "",
  });

  useEffect(() => {
    if (alumno) {
      setFormData(alumno);
    } else {
      navigate("/alumnos");
    }
  }, [alumno, navigate]);

  //Manejo de cambio en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAlumnos((prev) => prev.map((a) => (a.lu === lu ? formData : a)));

    navigate("/alumnos");
  };

  return (
    <div className="container mt-4 p-4 rounded" style={{ backgroundColor: "#fff0f6" }}>
      <h2 className="mb-3 text-center" style={{ color: "#cc3366" }}>Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>
            LU:
            <input 
              type="text" 
              name="lu" 
              value={formData.lu} 
              disabled 
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Nombre:
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Apellido:
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Curso:
            <input
              type="text"
              className="form-control"
              name="curso"
              value={formData.curso}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Email:
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Domicilio:
            <input
              type="text"
              className="form-control"
              name="domicilio"
              value={formData.domicilio}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="mb-3">
          <label>
            Teléfono:
            <input
              type="number" 
              placeholder="388 123-4567" 
              className="form-control"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#f497b6", color: "white" }} >Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;
