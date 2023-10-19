import React,{useContext} from 'react';
import { Logeado } from '../../context/Logeado';
import style from './home.module.css'

const Home = () => {
    const {currentUser} = useContext(Logeado);
    return (
        <div className={style.container}>
            <h1 className={style.titulo}>Bienvenido {currentUser.user}</h1>
        </div>
    );
};

export default Home;