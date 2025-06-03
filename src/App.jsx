// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./assets/components/inicio";
import ListaAlumnos from "./assets/components/listaalumnos";
import IngresoAlumnos from "./assets/components/ingresoAlumnos";
import NavBar from "./assets/components/navBar";
import DetalleAlumno from "./assets/components/detalleAlumno"; 
import AcercaDe from "./assets/components/acercaDe";

function App() {
  const [alumnos, setAlumnos] = useState([]); // Estado global

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/alumnos" element={<ListaAlumnos alumnos={alumnos} />} />
        <Route path="/nuevo" element={<IngresoAlumnos alAgregar={agregarAlumno} />} />
        <Route path="/alumno/:lu" element={<DetalleAlumno alumnos={alumnos} />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
