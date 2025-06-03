// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./assets/components/inicio";
import ListaAlumnos from "./assets/components/listaalumnos";
import IngresoAlumnos from "./assets/components/ingresoalumnos";
import NavBar from "./assets/components/navbar";
import DetalleAlumno from "./assets/components/detallealumno"; 
import AcercaDe from "./assets/components/acercaDe";
import EditarAlumno from "./assets/components/editaralumno";
import Papelera from "./assets/components/papelera";

function App() {
  const [alumnos, setAlumnos] = useState([]);
  const [mensaje, setMensaje] = useState("");
  const [papelera, setPapelera] = useState([]);

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
    setMensaje(`Alumno ${nuevoAlumno.nombre} agregado exitosamente.`);
  };

  useEffect(() => {
    if (mensaje) {
      const timer = setTimeout(() => setMensaje(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [mensaje]);

  return (
    <Router>
      <NavBar />

      {mensaje && <div className="alert alert-success text-center">{mensaje}</div>}

      <Routes>
        <Route
          path="/papelera"
          element={
            <Papelera
              papelera={papelera}
              setAlumnos={setAlumnos}
              setPapelera={setPapelera}
              setMensaje={setMensaje}
            />
          }
        />

        <Route path="/" element={<Inicio />} />

        <Route 
          path="/alumnos" 
          element={
            <ListaAlumnos 
              alumnos={alumnos} 
              setAlumnos={setAlumnos} 
              setMensaje={setMensaje}
              setPapelera={setPapelera}
            />
          } 
        />

        <Route path="/nuevo" element={<IngresoAlumnos alAgregar={agregarAlumno} />} />

        <Route path="/alumnos/:lu" element={<DetalleAlumno alumnos={alumnos} />} />

        <Route 
          path="/alumnos/:lu/editar" 
          element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} 
        />

        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
