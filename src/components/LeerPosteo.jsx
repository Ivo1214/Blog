import React from 'react';
import { useParams } from 'react-router-dom';

const LeerPosteo = () => {
    const {id} = useParams();
    return (
        <>
        {console.log(id)}
        </>
    );
};

export default LeerPosteo;