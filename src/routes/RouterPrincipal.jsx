import React,{useContext} from 'react';
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import Nav from '../views/nav/Nav';
import Home from '../views/home/Home';
import CrearPosteo from '../views/crearPosteo/CrearPosteo';
import ListaPosteos from '../views/listaPosteos/ListaPosteos';
import LeerPosteo from '../components/leerPosteo/LeerPosteo';
import Login from '../views/login/Login';
import { Logeado } from '../context/Logeado';

function RutaProtegida({ element, isAuth }) {
    return isAuth ? element : <Navigate to="/login" />;
  }

const RouterPrincipal = () => {
    const {currentUser, setCurrentUser} = useContext(Logeado);
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path={"/"} element={<RutaProtegida element={<Home />} isAuth={currentUser.auth} />}/>
                <Route path={"/posteos"} element={<RutaProtegida element={<ListaPosteos />} isAuth={currentUser.auth} />}>
                    <Route path={"/posteos/:usuario/detail/:id"} element={<RutaProtegida element={<LeerPosteo />} isAuth={currentUser.auth} />}/>
                </Route>
                <Route path={"/crear"} element={<RutaProtegida element={<CrearPosteo />} isAuth={currentUser.auth} />} />
                <Route path={"/login"} element={<Login></Login>}/>
                {/* <Route path='' element={<></>}/> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterPrincipal;