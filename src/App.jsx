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
  const [mensaje, setMensaje] = useState(""); // Estado para mensajes

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };

  return (
    <Router>
      <NavBar />
      {/* Mostrar mensaje si existe */}
      {mensaje && <div className="mensaje">{mensaje}</div>}

      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* Se pasa setAlumnos y setMensaje para que ListaAlumnos pueda eliminar y mostrar mensaje */}
        <Route 
          path="/alumnos" 
          element={
            <ListaAlumnos 
              alumnos={alumnos} 
              setAlumnos={setAlumnos} 
              setMensaje={setMensaje} 
            />
          } 
        />
        <Route path="/nuevo" element={<IngresoAlumnos alAgregar={agregarAlumno} />} />
        <Route path="/alumno/:lu" element={<DetalleAlumno alumnos={alumnos} />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;

