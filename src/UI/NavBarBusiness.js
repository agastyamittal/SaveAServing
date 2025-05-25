import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { sas_db } from '../DB/dbClient';
import Image from './SaveAServingLogo.png'


function NavBarBusiness({name}) {
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
          <img src={Image} alt='img' style={{ width: '70px', height: '70px' }} />
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
          <Box position={"absolute"} bottom={16} left={170}>
            <Typography sx={{ fontSize: "18px" }}> for {name}</Typography>
          </Box>
          <Box margin="auto" alignItems="center" justifyContent="right" display="flex" sx={{ flexGrow: 1, display: 'flex' }}>
            <Button onClick={handleLogout} component={Link} to="/signup" color="#000000" style={{ borderRadius: 5, backgroundColor: "#024abf" }} variant="contained">Log Out</Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarBusiness;
