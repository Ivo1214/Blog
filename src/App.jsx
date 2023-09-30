import './App.css'
import RouterPrincipal from './routes/RouterPrincipal';
import { useState, useEffect } from 'react';

// Contexts
import {Logeado, initAutenticacion, initUser} from './context/Logeado';

function App() {
  let [currentUser, setCurrentUser] = useState(initUser());
  let [auth, setAuth] = useState(initAutenticacion());

  
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
