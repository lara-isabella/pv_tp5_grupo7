import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./assets/components/inicio";
import ListaAlumnos from "./assets/components/listaAlumnos";
import IngresoAlumnos from "./assets/components/ingresoAlumnos";
import NavBar from "./assets/components/navBar";
import DetalleAlumno from "./assets/components/detalleAlumno"; 
import AcercaDe from "./assets/components/acercaDe";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/alumnos" element={<ListaAlumnos />} />
        <Route path="/nuevo" element={<IngresoAlumnos />} />
        <Route path="/alumno/:lu" element={<DetalleAlumno />} /> 
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
