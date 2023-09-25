import React,{useContext} from 'react';
import { Logeado } from '../context/Logeado';

const Home = () => {
    const {currentUser} = useContext(Logeado);
    return (
        <>
            {currentUser.name && currentUser.name !== "" ? (
                <>
                    <h1>Bienvenido {currentUser.name}</h1>
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