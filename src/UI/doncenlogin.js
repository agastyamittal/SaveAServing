import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AuthStatus from './AuthStatus';
import Login from './Login';
import NavBar from './mainnavbar';

function doncenlogin() {
    return (
        <>
            <NavBar />
            <Box marginTop="20px" alignItems="center" justifyContent="center" display="flex">
                <Typography align="center" variant="h3" sx={{ fontWeight: "600" }} marginTop="50px">Login to your Donation Center</Typography>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px"></Typography>
            <div>
                <AuthStatus />
                <Login redirectRoute="/doncendash" />
            </div>
        </>
    );
}
export default doncenlogin;