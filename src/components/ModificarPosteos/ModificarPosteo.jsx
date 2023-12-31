import React from 'react';
import { useParams } from 'react-router-dom';
import { apiPosteos } from '../../api/apiPosteos';
import { useNavigate} from 'react-router-dom';
import styles from './modificarPosteo.module.css';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModificarPosteo = () => {
    const {id} = useParams();
    const {usuario} = useParams();
    const navigate = useNavigate();

    function HandleSubmit (e){
        e.preventDefault();
        const titulo = e.target.tittle.value;
        const texto = e.target.text.value;
        apiPosteos.updatePosteo(usuario, id, titulo, texto)
        .then((response) => {
            console.log(response);
            navigate('/posteos');
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    function HandleDelete (){
        apiPosteos.deletePosteo(usuario, id)
        .then((response) => {
            console.log(response);
            navigate('/posteos');
        })
        .catch((error) => {
            alert(error.message);
        })
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <React.Fragment>
            <Button className={styles.button}
                    size="medium"
                    variant="filled"
                    onClick={handleOpen}>
                    Modificar Posteo
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className={styles.container} sx={{ ...style, width: 200 }}>
                <form className={styles.formulario} onSubmit={HandleSubmit}>
                    <input className={styles.input} type="text" placeholder='Titulo:' name='tittle'/>
                    <input className={styles.input} type="text" placeholder='Texto:' name='text'/>
                    <div className={styles.botonesFormulario}>
                        <input className={styles.enviar} type="submit" value={"Enviar"}/>
                        <button className={styles.eliminar} onClick={HandleDelete} >Eliminar</button>
                    </div>
                </form>  
                    <Button 
                        className={styles.buttonCancelar}
                        size="medium"
                        variant="filled"
                        onClick={handleClose}>
                        Cancelar
                    </Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
};

export default ModificarPosteo;