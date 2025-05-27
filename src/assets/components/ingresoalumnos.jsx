import React, { useState, useEffect, useMemo, useCallback } from "react";

function IngresoAlumnos({ alAgregar, alModificar, alumnoSeleccionado }) {
    const [luContador, setLuContador] = useState(1);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [curso, setCurso] = useState("");
    const [email, setEmail] = useState("");
    const [domicilio, setDomicilio] = useState("");
    const [telefono, setTelefono] = useState("");
    const [estado, setEstado] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (alumnoSeleccionado) {
            setLuContador(alumnoSeleccionado.lu);
            setNombre(alumnoSeleccionado.nombre);
            setApellido(alumnoSeleccionado.apellido);
            setCurso(alumnoSeleccionado.curso);
            setEmail(alumnoSeleccionado.email);
            setDomicilio(alumnoSeleccionado.domicilio);
            setTelefono(alumnoSeleccionado.telefono);
            setEstado(alumnoSeleccionado.estado);
        } else {
            setLuContador(1);
            setNombre("");
            setApellido("");
            setCurso("");
            setEmail("");
            setDomicilio("");
            setTelefono("");
        }
    }, [alumnoSeleccionado]);

    // Agregar producto nuevo
    const manejarSubmit = useCallback((evento) => {
        evento.preventDefault();

        if (!nombre || !apellido || !curso || !email) {
            setError("Por favor complete todos los campos obligatorios.");
            return;
        }

        // Si pasa la validación, limpiamos el error
        setError("");
    
        const nuevoAlumno = {
            lu: luContador,
            nombre,
            apellido,
            curso,
            email,
            domicilio,
            telefono,
            estado
        };

        alAgregar(nuevoAlumno);
        setLuContador(luContador + 1);
        limpiarFormulario();
    }, [idContador, nombre, marca, precioUnit, descuento, precioDescuento, stock, estado, alAgregar]);

    // Limpiar formulario después de agregar o modificar
    const limpiarFormulario = useCallback(() => {
        setNombre("");
        setApellido("");
        setCurso("");
        setEmail("");
        setDomicilio("");
        setTelefono("");
        setEstado(true);
    }, [luContador]);

    return (
        <div>
            
        </div>
    );
}

export default IngresoAlumnos