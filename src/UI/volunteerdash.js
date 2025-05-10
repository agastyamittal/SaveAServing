
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
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
import NavBarBusiness from './NavBarBusiness';

function volunteerdash(){
    return (
        <>
        <NavBarBusiness/>
        <Box marginTop = "75px" alignItems = "center" justifyContent = "center" display = "flex">
        <Button component={Link} to="/bsignup" style={{color : "white", borderRadius: 5, backgroundColor: "#024abf"}} variant="contained">Add Your Volunteer</Button>
        </Box>
        <Typography align = "center" variant = "h5" sx={{fontWeight: "600"}} marginTop = "50px">How can you help?</Typography>
        <Box marginTop = "75px" alignItems = "center" justifyContent = "center" display = "flex">
        <Typography align = "center" variant = "h5" sx={{fontWeight: "600"}} marginTop = "50px">Volunteer Dashboard</Typography>
        </Box>
        </>
    );
}
export default volunteerdash;