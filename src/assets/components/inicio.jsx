
import { Link } from "react-router-dom";
import "../../App.css"; 

function Inicio() {
  return (
    <div className="inicio-container">
      <h1 className="inicio-titulo">Sistema de Gestión de Alumnos </h1>
      <p className="inicio-descripcion">
        Bienvenido al Sistema de Gestión de Alumnos, donde puedes administrar y consultar información de manera fácil y eficiente.  
        Utiliza el menú superior para navegar entre las distintas opciones y gestionar cada detalle con comodidad.
      </p>
      <Link to="/alumnos" className="inicio-boton">Ver lista de alumnos</Link>
    </div>
  );
}

export default Inicio;
