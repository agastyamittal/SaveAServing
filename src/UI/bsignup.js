import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AuthStatus from './AuthStatus';
import NavBar from './mainnavbar';
import SignUp from './SignUp';

function bsignup() {
    return (
        <>
            <NavBar />
            <Box marginTop="20px" alignItems="center" justifyContent="center" display="flex">
                <Typography align="center" variant="h3" sx={{ fontWeight: "600" }} marginTop="50px">Register your Business</Typography>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px"></Typography>
            <div>

                <AuthStatus />
                <hr />
                <SignUp tableName="business_info" />
                <hr />
  
            </div>
        </>
    );
}
export default bsignup;