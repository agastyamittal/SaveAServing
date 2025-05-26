import Typography from '@mui/material/Typography';
import AuthStatus from './AuthStatus';
import Login from './Login';
import NavBar from './mainnavbar';
import './styles/global.css';
import './styles/volunteer.css';
import Box from '@mui/material/Box';

function volunteerlogin(){
    return (
        <>
    
        <NavBar />
            <Box marginTop="20px" alignItems="center" justifyContent="center" display="flex">
                <Typography align="center" variant="h3" sx={{ fontWeight: "600" }} marginTop="50px">Login to your Volunteer Account</Typography>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px"></Typography>
            <div>

                <AuthStatus />
                <hr />
                {}
                <hr />
                <Login redirectRoute="/volunteerdash" />
            </div>
        </>
    );
}
export default volunteerlogin;