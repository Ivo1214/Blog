import React, {useContext,useEffect} from 'react';
import { Logeado } from '../context/Logeado';
import { useNavigate } from 'react-router-dom';
import {apiLogin} from '../api/apiLogin';

const Login = () => {
    const { currentUser, setCurrentUser } = useContext(Logeado);
    const navigate = useNavigate();

    async function HandleSubmit(e) {
        e.preventDefault();
        let name = e.target.name.value;
        let password = e.target.password.value;
        
        apiLogin.post(name, password)
        .then((response)=>{
          const obj = {
            user: name,
            auth: true
          };
          setCurrentUser(obj);
          localStorage.setItem('isAuthenticated', true);
          localStorage.setItem('user', name);
        })
        .catch((error)=>{
          alert(error.response.data.detail);
        });
    };

    useEffect(() => {
      if (currentUser.auth) {
        navigate("/");
      }
    }, [currentUser, navigate]);
    return (
        <>
          <form onSubmit={HandleSubmit}>
            <input type="text" placeholder='Nombre:' name='name'/>
            <input type="password" placeholder='Contraseña:' name='password'/>
            <input type="submit" value={"Enviar"}/>
          </form>  
        </>
    );
};

export default Login;