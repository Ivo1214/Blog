import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Logeado } from '../../context/Logeado';

const Nav = () => {
    const {currentUser, setCurrentUser} = useContext(Logeado);
    return (
        <nav>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => (isActive ? "active" : "")}>Inicio</NavLink></li>
                <li><NavLink to='/posteos' className={({ isActive }) => (isActive ? "active" : "")}>Posteos</NavLink></li>
                <li><NavLink to='/crear' className={({ isActive }) => (isActive ? "active" : "")}>Crear Posteo</NavLink></li>
                {currentUser.name && currentUser.name !== "" ? (
                    <>
                        <li>
                            <span>{currentUser.name}</span>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? "active" : "")}
                                onClick={() => setCurrentUser({ name: "", email: "" })}
                            >
                                Cerrar sesión
                            </NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to='/login' className={({ isActive }) => (isActive ? "active" : "")}>LogIn</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;