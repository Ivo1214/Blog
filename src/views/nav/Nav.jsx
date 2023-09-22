import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li><NavLink to='/posteos'>Posteos</NavLink></li>
                <li><NavLink to='/crear'>Crear Posteo</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;