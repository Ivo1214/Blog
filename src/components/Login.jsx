import React, {useContext} from 'react';
import { Logeado } from '../context/Logeado';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { currentUser, setCurrentUser } = useContext(Logeado);
    const navigate = useNavigate();

    function HandleSubmit(e) {
        e.preventDefault();

        const obj = {
            name: e.target.nombre.value,
            email: e.target.email.value
        };
        setCurrentUser(obj);
        navigate("/");
    };
    return (
        <>
          <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='Nombre:' name='nombre'/>
            <input type="email" placeholder='Email:' name='email'/>
            <input type="submit" value={"Enviar"}/>
          </form>  
        </>
    );
};

export default Login;