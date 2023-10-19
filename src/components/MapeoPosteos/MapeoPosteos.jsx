import React,{useState, useEffect} from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import { apiPosteos } from '../../api/apiPosteos';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from './mapeoPosteos.module.css';


const Posteos = (props) => {
    const navigate = useNavigate();
    
    const [posteos, setPosteos] = useState([]);
    useEffect(() =>{
        apiPosteos.get(props.nombre)
        .then((response) => {
            setPosteos(response);
        })
        .catch((error) => {
            console.log(error.message);
        })
    },
     []);

    function leer(id, usuario) {
        navigate(`/posteos/${usuario}/detail/${id}`);
    }

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );


    return (
    <div className={style.container}>
        {
            posteos.map((post)=>(
                <>
                    <Card sx={{ minWidth: 250 }}>
                        <CardContent key={post.id}>
                            <Typography className={style.titulo} variant="h4" component="div">
                            {post.titulo}
                            </Typography>
                            <Typography className={style.autor} sx={{ mb: 1.5 }} color="text.secondary">
                            Autor: {post.usuario}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className={style.button}
                                size="medium"
                                variant="filled"
                                onClick={() => leer(post.id, post.usuario)}>
                                Ver posteo
                            </Button>
                        </CardActions>
                    </Card>
                </>
            ))
        }
        <Outlet></Outlet>
    </div>)
};

export default Posteos;