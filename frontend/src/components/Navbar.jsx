import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;

  // Decode the JWT token to get user information
  const getUserInfo = () => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return decoded;
        console.log(decoded)
      } catch (error) {
        console.error('Error decoding token:', error);
        return {};
      }
    }
    return {};
  };

  const userInfo = getUserInfo();
  console.log(userInfo);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    handleClose();
    navigate('/login');
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', marginRight: 3 }}
          onClick={() => navigate('/')}
        >
          Resume Builder
        </Typography>

        {isLoggedIn && (
          <>
            <Button color="inherit" onClick={() => navigate('/dashboard')} sx={{ mr: 2 }}>
              Dashboard
            </Button>
            <Button color="inherit" onClick={() => navigate('/create-resume')} sx={{ mr: 2 }}>
              Create Resume
            </Button>
          </>
        )}

        <Box sx={{ flexGrow: 1 }} />

        {isLoggedIn ? (
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar sx={{
                bgcolor: '#ff4081',
                width: 40,
                height: 40,
                fontWeight: 'bold',
                fontSize: '1.2rem'
              }}>
                {userInfo.sub.name ? userInfo.sub.name.charAt(0).toUpperCase() : 'U'}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { handleClose(); navigate('/'); }}>
                Home
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box>
            <Button color="inherit" onClick={() => navigate('/login')}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate('/register')}>
              Register
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 