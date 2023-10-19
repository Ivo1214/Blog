import React,{useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logeado } from '../../context/Logeado';
import style from './nav.module.css';

const pages = ['Inicio', 'Posteos', 'Crear Posteo'];
const settings = ['Logout'];

function Nav() {
  const {currentUser, setCurrentUser} = useContext(Logeado);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    let selectedOption = event.target.innerHTML;
    if (selectedOption.length > 15) {
        let textLenght = selectedOption.indexOf('<');
        selectedOption = selectedOption.substring(0, textLenght);
    }

    switch (selectedOption) {
        case 'Inicio':
            navigate("/");
            break;
        case 'Posteos':
            navigate("/posteos");
            break;
        case 'Crear Posteo':
            navigate("/crear");
            break;
        default:
            console.log("Error");
            break;
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    // console.log(event.target.innerHTML);
    switch (event.target.innerHTML) {
        case 'Logout':
            setCurrentUser({ user: "", auth: false });
            localStorage.setItem('isAuthenticated', false);
            localStorage.setItem('user', "");
            navigate("/");
            break;
        default:
            console.log("Error");
            break;
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar className={style.nav} position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {
                  pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                      {page}
                    </Button>
                  ))
                }
          </Box>
          <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;