import React, {useState} from 'react';
import Posteos from './Posteos';
import Card from './Card';

const Form = () => {
    let [id, setID] = useState(566);
    let [user_id, setUser_id] = useState(566);
   

    const handleEvent = (e)=>{
        e.preventDefault();
        const user_name = e.target.userName.value;
        const title = e.target.title.value;
        const text = e.target.text.value;
        
        let new_post = {
            "id": id,
            "titulo": title,
            "texto": text,
            "user_id": user_id,
            "usuario": user_name
          }
        console.log("Posteo nuevo:")
        console.log(new_post);
    
        Posteos.push(new_post);
        setID(id+1);
        setUser_id(user_id+1);
    }

    
    return (
        <>
            <form onSubmit={handleEvent}>
                <label>Nombre de usuario</label>
                <input id='userName' type='text'></input>
                <label>Titulo: </label>
                <input id='title' type='text'></input>
                <label>Texto: </label>
                <input id='text' type='text'></input>
                <input type='submit' value='Cargar'></input>
            </form>
        </>
    );
}

export default Form;