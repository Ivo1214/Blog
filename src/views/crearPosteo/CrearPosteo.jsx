import React, {useState} from 'react';
import { apiPosteos } from '../../api/apiPosteos';
import style from './crearPosteo.module.css';
import Typography from '@mui/material/Typography';

const Form = () => {
   

    const handleEvent = (e)=>{
        e.preventDefault();
        const user_name = e.target.userName.value;
        const tittle = e.target.tittle.value;
        const text = e.target.text.value;
        
        apiPosteos.post(user_name, tittle, text)
        .then((response) =>{
            alert('Posteo creado con exito');
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    
    return (
        <div className={style.container}>
            <Typography className={style.titulo} variant="h2" component="div">Rellena los campos para crear un posteo</Typography>
            <form className={style.formulario} onSubmit={handleEvent}>
                <label>Nombre de usuario:</label>
                <input id='userName' type='text'></input>
                <label>Titulo: </label>
                <input id='tittle' type='text'></input>
                <label>Texto: </label>
                <input id='text' type='text'></input>
                <input className={style.cargar} type='submit' value='Cargar'></input>
            </form>
        </div>
    );
}

export default Form;