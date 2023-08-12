import React from 'react';
import Posteos from './Posteos';


function leer(id) {
    alert(`LEER posteo ID ${id}`);
}

function modificar (id){
    alert(`MODIFICAR posteo ID ${id}`);
}


const Card = () => {

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
    </div>)
};

export default Card;