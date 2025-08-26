import React from 'react';
import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [dni, setDni] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !dni || !email) {
        alert("Completar todos los datos");
        } else {
        alert("Datos enviados");
        }
    };
    return (

         
      <form className="mx-auto p-4 border rounded shadow mt-2 w-50" onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" placeholder="Ingrese su nombre"  value={nombre}
            onChange={(e) => setNombre(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Apellido</label>
          <input type="text" className="form-control" placeholder="Ingrese su apellido" value={apellido}
            onChange={(e) => setApellido(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">DNI</label>
          <input type="text" className="form-control" placeholder="Ingrese su DNI"  value={dni}
            onChange={(e) => setDni(e.target.value)} />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="ejemplo@email.com" value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <button type="submit" className="btn btn-primary w-100">Enviar</button>
      </form>
    
    );
};

export default Formulario;