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
import { LineChart } from '@mui/x-charts/LineChart';
import TextField from '@mui/material/TextField';

function businessdash(){
    return (
        <>
        <NavBarBusiness/>
        <Typography align = "center" variant = "h3" sx={{fontWeight: "600"}} marginTop = "50px">Business Dashboard</Typography>
        <Typography align = "center" variant = "h5" sx={{fontWeight: "600"}} marginTop = "50px">Prediction Graph</Typography>
        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
        ]}
        height={300}
        />
        <Box marginTop = "20px" alignItems = "center" justifyContent = "center" display = "flex">
        <TextField fullWidth id="outlined-basic fullWidth" label="Type Menu Here, Comma Seperated" variant="outlined"/>
        </Box>
        <Button>Update Menu</Button>
        </>
    );
}
export default businessdash;