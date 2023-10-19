import React, {useContext,useEffect} from 'react';
import { Logeado } from '../../context/Logeado';
import { useNavigate } from 'react-router-dom';
import {apiLogin} from '../../api/apiLogin';
import style from './login.module.css';
import Typography from '@mui/material/Typography';

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
        <div className={style.container}>
          <Typography className={style.titulo} variant="h2" component="h2">Ingrese sus credenciales</Typography>
          <form className={style.formulario} onSubmit={HandleSubmit}>
            <input type="text" placeholder='Nombre:' name='name'/>
            <input type="password" placeholder='Contraseña:' name='password'/>
            <input className={style.entrar} type="submit" value={"Entrar"}/>
          </form>  
        </div>
    );
};

export default Login;