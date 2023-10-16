import './App.css'
import RouterPrincipal from './routes/RouterPrincipal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Contexts
import {Logeado, initAutenticacion, initUser} from './context/Logeado';

function App() {
  let [currentUser, setCurrentUser] = useState(initUser());
  let [auth, setAuth] = useState(initAutenticacion());
  // useEffect(()=>{
  //   if (sessionStorage.getItem('user')){
  //     const navigate = useNavigate();
  //     setCurrentUser(sessionStorage.getItem('user'));
  //     setAuth(sessionStorage.getItem('isAuthenticated'));
  //     console.log("Datos desde App.jsx: " + currentUser + " " + auth);
  //     navigate("/");
  //   }
  // });

  
  return (
    <div className="App">
      <Logeado.Provider value={{currentUser, setCurrentUser, auth, setAuth}}>
        <header className="App-header">
          <RouterPrincipal/>
        </header>
      </Logeado.Provider>
    </div>
  )
}

export default App
