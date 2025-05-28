import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavBar from './mainnavbar';

function doncen() {
    return (
        <>
            <NavBar />
            <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex">
                <Button sx={{ backgroundColor: "#D1B24C" }} component={Link} to="/doncensignup" style={{ color: "white", borderRadius: 5, }} variant="contained">Add Your Donation Center</Button>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px">How SaveAServing helps your donation center</Typography>
            <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex" sx={{ maxWidth: "800px", mx: "auto", px: 3, p: 3, bgcolor: '#F8F8F8', borderRadius: 2 }}>
                <Typography align="center" variant="h6" sx={{ fontWeight: "400" }} marginTop="20px">
                    "SaveAServing connects your donation center with local restaurants, making it easy to receive surplus food donations. Our platform streamlines the donation process, ensuring that food reaches those in need quickly and efficiently.

                    Food transport is done by our passionate volunteers, allowing your donation center to focus on what matters most: helping those in need. With SaveAServing, your donation center can make a greater impact in the community."
                </Typography>
            </Box>
        </>
    );
}
export default doncen;