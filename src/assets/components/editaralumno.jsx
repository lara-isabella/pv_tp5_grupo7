// editaralumno.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarAlumno({ alumnos, setAlumnos }) {
  const { id } = useParams(); 
  const navigate = useNavigate();

  //Buscar alumno con LU = id
  const alumno = alumnos.find((a) => a.lu === id);

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

    setAlumnos((prev) => prev.map((a) => (a.lu === id ? formData : a)));

    navigate("/alumnos");
  };

  return (
    <div>
      <h2>Editar Alumno</h2>
      <form onSubmit={handleSubmit}>
        <label>
          LU:
          <input type="text" name="lu" value={formData.lu} disabled />
        </label>
        <br />
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Curso:
          <input
            type="text"
            name="curso"
            value={formData.curso}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Domicilio:
          <input
            type="text"
            name="domicilio"
            value={formData.domicilio}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Guardar cambios</button>
      </form>
    </div>
  );
}

export default EditarAlumno;
