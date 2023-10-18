import React,{useContext} from 'react';
import { Logeado } from '../context/Logeado';

const Home = () => {
    const {currentUser} = useContext(Logeado);
    return (
        <>
            <h1>Bienvenido {currentUser.user}</h1>
        </>
    );
};

export default Home;