import React,{useContext} from 'react';
import { Logeado } from '../context/Logeado';

const Home = () => {
    const {currentUser} = useContext(Logeado);
    return (
        <>
            {currentUser.auth === true ? (
                <>
                    <h1>Bienvenido {currentUser.user}</h1>
                </>
            ) : (
                <>
                    <h1>Logeate para acceder a los posteos</h1>
                </>
            )}
        </>
    );
};

export default Home;