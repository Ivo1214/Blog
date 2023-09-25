import {createContext} from 'react';

export const Logeado = createContext({
    user: {name: '', email: ''},
    setUser: () => {}
});

