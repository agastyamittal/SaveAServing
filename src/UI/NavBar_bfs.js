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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
          <Box margin = "auto" alignItems = "center" justifyContent = "center" display = "flex" sx={{flexGrow: 1, display: 'flex' }}>
            <Button component={Link} to="/businesses"color="#000000" style={{borderRadius: 5}} variant="text">Businesses</Button>
            <Button component={Link} to="/doncen" color="#000000" style={{borderRadius: 5}} variant="text">Donation Center</Button>
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
        <MenuItem component={Link} to="/volunteer"onClick={handleClose}>Volunteer</MenuItem>
        <MenuItem component={Link} to="/team"onClick={handleClose}>Team up to reduce waste</MenuItem>
      </Menu>
            <Button component={Link} to="/whm"color="#000000" style={{borderRadius: 5}} variant="text">Waste Heat Map</Button>
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
        <MenuItem component={Link} to="/comdash"onClick={handleClose2}>Community Dashboard</MenuItem>
      </Menu>
            <Button component={Link} to="/login" color="#000000" style={{marginLeft: "550px", marginRight: "10px", borderRadius: 5, backgroundColor: "#024abf"}} variant="contained">Log In</Button>
            <Button component={Link} to="/signup" color="#000000" style={{borderRadius: 5, backgroundColor: "#024abf"}} variant="contained">Sign Up</Button>
          </Box>
          
      
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar_bfs;
