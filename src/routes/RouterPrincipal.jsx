import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Nav from '../views/nav/Nav';
import Home from '../views/Home';
import CrearPosteo from '../views/CrearPosteo';
import ListaPosteos from '../views/ListaPosteos';
import LeerPosteo from '../components/LeerPosteo';
import Login from '../views/Login';
import ModificarPosteo from '../components/ModificarPosteo';


const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/posteos' element={<ListaPosteos></ListaPosteos>}>
                    <Route path='/posteos/:usuario/detail/:id' element={<LeerPosteo></LeerPosteo>}/>
                </Route>
                <Route path='/crear' element={<CrearPosteo></CrearPosteo>}/>
                <Route path='/login' element={<Login></Login>}/>
                {/* <Route path='' element={<></>}/> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterPrincipal;