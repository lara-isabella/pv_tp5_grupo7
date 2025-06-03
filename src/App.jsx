// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inicio from "./assets/components/inicio";
import ListaAlumnos from "./assets/components/listaalumnos";
import IngresoAlumnos from "./assets/components/ingresoAlumnos";
import NavBar from "./assets/components/navBar";
import DetalleAlumno from "./assets/components/detalleAlumno"; 
import AcercaDe from "./assets/components/acercaDe";
import EditarAlumno from "./assets/components/editaralumno";

function App() {
  const [alumnos, setAlumnos] = useState([]); // Estado global para almacenar alumnos
  const [mensaje, setMensaje] = useState(""); // Estado para mostrar mensajes (p.ej. confirmaciones)

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos((prev) => [...prev, nuevoAlumno]);
  };

  return (
    <Router>
      <NavBar />

      {/*Mostrar mensaje si existe*/}
      {mensaje && <div className="mensaje">{mensaje}</div>}

      <Routes>
        {/*Ruta principal*/}
        <Route path="/" element={<Inicio />} />

        {/*para listar alumnos con funciones para eliminar y mostrar mensajes */}
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

        {/*para agregar nuevo alumno */}
        <Route path="/nuevo" element={<IngresoAlumnos alAgregar={agregarAlumno} />} />

        {/*para ver detalles del alumno, parámetro id es el LU */}
        <Route path="/alumnos/:id" element={<DetalleAlumno alumnos={alumnos} />} />

        {/*para editar alumno, parámetro id es el LU */}
        <Route 
          path="/alumnos/:id/editar" 
          element={<EditarAlumno alumnos={alumnos} setAlumnos={setAlumnos} />} 
        />

        {/*para página 'Acerca de' */}
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;

