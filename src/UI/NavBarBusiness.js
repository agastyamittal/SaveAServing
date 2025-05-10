import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'
import { sas_db } from '../DB/dbClient'

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBarBusiness() {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const handleLogout = async () => {
        await sas_db.auth.signOut()
        setUser(null)
        navigate('/')
      }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link} to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'arial',
              fontSize: '25px',
              fontWeight: 300,
              letterSpacing: '.0rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SaveAServing
          </Typography>
          <Box position={"absolute"} bottom={16} left={134}>
          <Typography sx={{fontSize: "18px"}}> for businesses</Typography>
          </Box>
          <Box margin = "auto" alignItems = "center" justifyContent = "right" display = "flex" sx={{flexGrow: 1, display: 'flex' }}>
            <Button onClick={handleLogout} component={Link} to="/signup" color="#000000" style={{borderRadius: 5, backgroundColor: "#024abf"}} variant="contained">Log Out</Button>
          </Box>
      
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarBusiness;
