import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavBar from './mainnavbar';

function volunteer() {



    return (
        <>
            <NavBar />
            <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex">
                <Button sx={{ backgroundColor: "#D1B24C" }} component={Link} to="/volunteersignup" style={{ color: "white", borderRadius: 5 }} variant="contained">Register to be a volunteer</Button>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px">What do volunteers do?</Typography>
            <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex" sx={{ maxWidth: "800px", mx: "auto", px: 3, p: 3, bgcolor: '#F8F8F8', borderRadius: 2 }}>
                <Typography align="center" variant="h6" sx={{ fontWeight: "400" }} marginTop="20px">
                    "Volunteers play a crucial role in SaveAServing by transporting food from restaurants to donation centers. By signing up as a volunteer, you can help reduce food waste and ensure that surplus food reaches those in need in your community."
                </Typography>

            </Box>
        </>
    );
}
export default volunteer;