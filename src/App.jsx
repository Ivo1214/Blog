import './App.css'
import RouterPrincipal from './routes/RouterPrincipal';
import { useState, useEffect } from 'react';

// Contexts
import {Logeado} from './context/Logeado';

function App() {
  let [currentUser, setCurrentUser] = useState({name:'', email:''});
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser){
      setCurrentUser(storedUser);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("user", currentUser);
  }, [currentUser])

  return (
    <div className="App">
      <Logeado.Provider value={{currentUser, setCurrentUser}}>
        <header className="App-header">
          <RouterPrincipal/>
        </header>
      </Logeado.Provider>
    </div>
  )
}

export default App
