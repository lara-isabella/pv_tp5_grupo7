import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./assets/components/inicio";
import ListaAlumnos from "./assets/components/listaalumnos";
import IngresoAlumnos from "./assets/components/ingresoalumnos";
import NavBar from "./assets/components/navbar";
import DetalleAlumno from "./assets/components/detallealumno"; 

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/alumnos" element={<ListaAlumnos />} />
        <Route path="/nuevo" element={<IngresoAlumnos />} />
        <Route path="/alumno/:lu" element={<DetalleAlumno />} /> 
      </Routes>
    </Router>
  );
}

export default App;
