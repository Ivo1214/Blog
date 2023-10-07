import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Nav from '../views/nav/Nav';
import Home from '../components/Home';
import Form from '../components/Form';
import Card from '../components/Card';
import LeerPosteo from '../components/LeerPosteo';
import Login from '../components/Login';
import ModificarPosteo from '../components/ModificarPosteo';


const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Nav></Nav>
            <Routes>
                <Route path='/' element={<Home></Home>}/>
                <Route path='/posteos' element={<Card></Card>}>
                    <Route path='/posteos/:usuario/detail/:id' element={<LeerPosteo></LeerPosteo>}/>
                    <Route path='/posteos/:usuario/update/:id' element={<ModificarPosteo></ModificarPosteo>}></Route>
                </Route>
                <Route path='/crear' element={<Form></Form>}/>
                <Route path='/login' element={<Login></Login>}/>
                {/* <Route path='' element={<></>}/> */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouterPrincipal;