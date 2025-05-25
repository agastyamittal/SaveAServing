import NavBar from './mainnavbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Login from './Login'
import AuthStatus from './AuthStatus'

function blogin() {
    return (
        <>
            <NavBar />
            <Box marginTop="20px" alignItems="center" justifyContent="center" display="flex">
                <Typography align="center" variant="h3" sx={{ fontWeight: "600" }} marginTop="50px">Login to your Business</Typography>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px"></Typography>
            <div>

                <AuthStatus />
                <hr />
                {}
                <hr />
                <Login redirectRoute="/bdash" />
            </div>
        </>
    );
}
export default blogin;