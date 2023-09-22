import React from 'react';
import Posteos from './Posteos';
import { Outlet, useNavigate} from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();

    function leer(id) {
        navigate(`/posteos/${id}`);
    }
    function modificar (id){
        alert(`MODIFICAR posteo ID ${id}`);
    }

    return (<div>
        {
            Posteos.map((post)=>(
                <div key={post.id}>
                    <h1>{post.titulo}</h1>
                    <button onClick={() => leer(post.id)}>LEER</button>
                    <button onClick={() => modificar(post.id)}>MODIFICAR</button>
                </div>
            ))
        }
        <Outlet></Outlet>
    </div>)
};

export default Card;