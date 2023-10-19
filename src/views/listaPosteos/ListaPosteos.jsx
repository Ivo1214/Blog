import React from 'react';
import MapeoPosteos from '../../components/MapeoPosteos/MapeoPosteos';
import style from './listaPosteos.module.css'

const ListaPosteos = () => {
    let nombre = 'ivo';
    return (
        <div className={style.container}>
            <h1 className={style.titulo}>Lista de posteos del usuario: <span className={style.usuarioBuscado}>{nombre}</span></h1>
            <MapeoPosteos nombre={nombre}></MapeoPosteos>
        </div>
    );
};

export default ListaPosteos;