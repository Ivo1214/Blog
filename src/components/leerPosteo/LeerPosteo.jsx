import React, {useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { apiPosteos } from '../../api/apiPosteos';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModificarPosteo from '../ModificarPosteos/ModificarPosteo';
import Typography from '@mui/material/Typography';
import styles from './leerPosteo.module.css';

// Estilos del Modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const LeerPosteo = () => {
    const {id} = useParams();
    const {usuario} = useParams();
    const navigate = useNavigate();
    const [datos, setDatos] = useState({});

// Se solicita los datos del posteo a la api
    useEffect(() => {
        apiPosteos.leerPosteo(usuario, id)
        .then((response) => {
            console.log(response);
            setDatos({
                usuario: response.usuario,
                titulo: response.titulo,
                texto: response.texto
            });
        })
        .catch((error) => {
            alert(error.message);
        })
    },[]);

// Controles del Modal
const [open, setOpen] = React.useState(true);
const handleClose = () => {
    setOpen(false);
    navigate(`/posteos`);
};

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box className={styles.modal} sx={style}>
                <Typography className={styles.titulo} variant="h3" component="div">{datos.titulo}</Typography>
                <Typography className={styles.texto} variant="p" component="div">Autor: {datos.usuario}</Typography>
                <Typography className={styles.texto} variant="p" component="div">{datos.texto}</Typography>
                <ModificarPosteo/>
            </Box>
        </Modal>
    );
};

export default LeerPosteo;