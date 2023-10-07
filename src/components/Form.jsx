import React, {useState} from 'react';
import { apiPosteos } from '../api/apiPosteos';

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
        <>
            <form onSubmit={handleEvent}>
                <label>Nombre de usuario</label>
                <input id='userName' type='text'></input>
                <label>Titulo: </label>
                <input id='tittle' type='text'></input>
                <label>Texto: </label>
                <input id='text' type='text'></input>
                <input type='submit' value='Cargar'></input>
            </form>
        </>
    );
}

export default Form;