import React from 'react';
import { useParams } from 'react-router-dom';
import { apiPosteos } from '../api/apiPosteos';
import { useNavigate} from 'react-router-dom';

const ModificarPosteo = () => {
    const {id} = useParams();
    const {usuario} = useParams();
    const navigate = useNavigate();

    function HandleSubmit (e){
        e.preventDefault();
        const titulo = e.target.tittle.value;
        const texto = e.target.text.value;
        apiPosteos.updatePosteo(usuario, id, titulo, texto)
        .then((response) => {
            console.log(response);
            navigate('/posteos');
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    function HandleDelete (){
        apiPosteos.deletePosteo(usuario, id)
        .then((response) => {
            console.log(response);
            navigate('/posteos');
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='Titulo:' name='tittle'/>
            <input type="text" placeholder='Texto:' name='text'/>
            <input type="submit" value={"Enviar"}/>
            <button onClick={HandleDelete} >Eliminar</button>
          </form>  
    );
};

export default ModificarPosteo;