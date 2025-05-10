import NavBar from './NavBar_bfs';
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
import { FormControl } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { FormLabel } from '@mui/material';
import { Input } from '@mui/material';
import { InputLabel } from '@mui/material';
import SignUp from './SignUp'
import Login from './Login'
import AuthStatus from './AuthStatus'

function teamlogin(){
    return (
        <>
        <NavBar/>
        <Box marginTop = "20px" alignItems = "center" justifyContent = "center" display = "flex">
        <Typography align = "center" variant = "h3" sx={{fontWeight: "600"}} marginTop = "50px">Login to your Team Profile</Typography>
        </Box>
        <Typography align = "center" variant = "h5" sx={{fontWeight: "600"}} marginTop = "50px"></Typography>
        <div>
      <AuthStatus />
      <hr />
      {/* <SignUp tableName = "businessinfo"/> */}
      <hr />
      <Login redirectRoute = "/teamdash"/>
    </div>
        </>
    );
}
export default teamlogin;