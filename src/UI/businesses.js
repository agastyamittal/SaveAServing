import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavBar from './mainnavbar';

function businesses() {
    return (
        <>
            <NavBar />
            <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex">
                <Button sx={{ backgroundColor: "#D1B24C" }} component={Link} to="/bsignup" style={{ color: "white", borderRadius: 5, }} variant="contained">Add Your Business</Button>
            </Box>
            <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px">How SaveAServing helps your business</Typography>
            <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex" flexDirection="column" sx={{ maxWidth: "800px", mx: "auto", px: 3, p: 3, bgcolor: '#F8F8F8', borderRadius: 2 }}>
                <Typography align="center" variant="h6" sx={{ fontWeight: "400" }}>
                    "SaveAServing uses advanced AI technology to predict your restaurant's food demand with precision. Our intelligent system analyzes historical data and current trends to help you make informed decisions about food preparation.
                    With our user-friendly interface, you can easily track, manage, and optimize your food inventory. This helps reduce food waste significantly and cuts down operational costs, leading to better profit margins and a more sustainable business model."
                </Typography>
            </Box>
        </>
    );
}
export default businesses;