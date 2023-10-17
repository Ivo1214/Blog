import './App.css'
import RouterPrincipal from './routes/RouterPrincipal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Contexts
import {Logeado, initAutenticacion, initUser} from './context/Logeado';

function App() {
  let [currentUser, setCurrentUser] = useState(initUser());
  let [auth, setAuth] = useState(initAutenticacion());
  useEffect(()=>{
    if (localStorage.getItem('user')){
      let obj = {
        user: localStorage.getItem('user'),
        auth: localStorage.getItem('isAuthenticated')
      };
      setCurrentUser(obj);
    }
  },[]);

  
  return (
    <>
      {/* {console.log(currentUser)} */}
      <div className="App">
        <Logeado.Provider value={{currentUser, setCurrentUser, auth, setAuth}}>
          <header className="App-header">
            <RouterPrincipal/>
          </header>
        </Logeado.Provider>
      </div>
    </>
  )
}

export default App
