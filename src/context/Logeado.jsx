import {createContext} from 'react';

const defaultValue = {
    user: "",
    auth: false
}

export const Logeado = createContext({defaultValue});


export function initAutenticacion() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    console.log(`autenticación almacenada: ${isAuthenticated}`)
    return Boolean(isAuthenticated);  // Forzar que el dato sea interpretado como true/false (boolean)
}
  
export function initUser() {
    const user = sessionStorage.getItem('user');
    console.log(`user almacenado: ${user}`)
    return String(user); // Forzar que el dato sea interpretado como string
}