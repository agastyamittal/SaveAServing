import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavBar from './mainnavbar';

function volunteer(){

    const notificationTest = () => {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                new Notification('Hello! This is a test notification.');
            } else {
                console.log('Notification permission denied');
            }
        });
    }

    return (
        <>
        <NavBar/>
        <Box marginTop = "75px" alignItems = "center" justifyContent = "center" display = "flex">
        <Button component={Link} to="/volunteersignup" style={{color : "white", borderRadius: 5, backgroundColor: "#024abf"}} variant="contained">Register to be a volunteer</Button>
        </Box>
        <Typography align = "center" variant = "h5" sx={{fontWeight: "600"}} marginTop = "50px">What do volunteers do?</Typography>
        <Box marginTop = "75px" alignItems = "center" justifyContent = "center" display = "flex">
            <Typography align = "center" variant = "h6" sx={{fontWeight: "400"}} marginTop = "20px">
                Volunteers play a crucial role in SaveAServing by transporting food from restaurants to donation centers. By signing up as a volunteer, you can help reduce food waste and ensure that surplus food reaches those in need in your community.
            </Typography>
            
        </Box>
        <Box marginTop = "75px" alignItems = "center" justifyContent = "center" display = "flex">
            <Button onClick={notificationTest}>Notification!</Button>
        </Box>
        </>
    );
}
export default volunteer;