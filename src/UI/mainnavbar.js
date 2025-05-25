import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import './styles/global.css';
import './styles/volunteer.css';
import Image from './SaveAServingLogo.png'


function NavBar_bfs() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#123456' }}>
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
          <Box margin="auto" alignItems="center" justifyContent="center" display="flex" sx={{ flexGrow: 1, display: 'flex' }}>            <Button component={Link} to="/businesses" className="btn btn-text" variant="text">Businesses</Button>
            <Button component={Link} to="/doncen" className="btn btn-text" variant="text">Donation Center</Button>
            <Button
              color="#000000"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Get Involved
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem component={Link} to="/volunteer" onClick={handleClose}>Volunteer</MenuItem>
              <MenuItem component={Link} to="/team" onClick={handleClose}>Team up to reduce waste</MenuItem>
            </Menu>
            <Button
              color="#000000"
              id="basic-button"
              aria-controls={open2 ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? 'true' : undefined}
              onClick={handleClick2}
            >
              Impact
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem component={Link} to="/comdash" onClick={handleClose2}>Community Dashboard</MenuItem>
            </Menu>            <Button component={Link} to="/login" className="btn btn-primary nav-btn-right nav-btn-space" variant="contained">Log In</Button>
            <Button component={Link} to="/signup" className="btn btn-primary" variant="contained">Sign Up</Button>
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar_bfs;
