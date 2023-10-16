import React,{useState, useEffect} from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import { apiPosteos } from '../api/apiPosteos';

const Posteos = (props) => {
    const navigate = useNavigate();
    
    const [posteos, setPosteos] = useState([]);
    useEffect(() =>{
        apiPosteos.get(props.nombre)
        .then((response) => {
            setPosteos(response);
        })
        .catch((error) => {
            console.log(error.message);
        })
    },
     []);

    function leer(id, usuario) {
        navigate(`/posteos/${usuario}/detail/${id}`);
    }
    function modificar (id, usuario){
        navigate(`/posteos/${usuario}/update/${id}`);
    }

    return (
    <div>
        {
            posteos.map((post)=>(
                <div key={post.id}>
                    <h1>{post.titulo}</h1>
                    <button onClick={() => leer(post.id, post.usuario)}>LEER</button>
                    <button onClick={() => modificar(post.id, post.usuario)}>MODIFICAR</button>
                </div>
            ))
        }
        {/* <Outlet></Outlet> */}
    </div>)
};

export default Posteos;