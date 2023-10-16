import React from 'react';
import MapeoPosteos from '../components/MapeoPosteos';


const ListaPosteos = () => {
    let nombre = 'ivo';
    return (
        <div>
            <h1>Lista de posteos del usuario: {nombre}</h1>
            <MapeoPosteos nombre={nombre}></MapeoPosteos>
        </div>
    );
};

export default ListaPosteos;