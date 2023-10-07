import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { apiPosteos } from '../api/apiPosteos';

const LeerPosteo = () => {
    const {id} = useParams();
    const {usuario} = useParams();

    useEffect(() => {
        apiPosteos.leerPosteo(usuario, id)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            alert(error.message);
        })
    });
    
};

export default LeerPosteo;