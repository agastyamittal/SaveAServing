import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavBar from './mainnavbar';

function signup(){
    return (
        <>
        <NavBar/>
        <Box marginTop = "20px" alignItems = "center" justifyContent = "center" display = "flex">
        <Typography align = "center" variant = "h3" sx={{fontWeight: "600"}} marginTop = "50px">Sign Up As</Typography>
        </Box>
        <Typography align = "center" variant = "h5" sx={{fontWeight: "600"}} marginTop = "50px"></Typography>
        <Box marginTop = "75px" alignItems = "center" justifyContent = "center" display = "flex">
        <Box display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: '75%', padding: 1}} >
        <Button sx={{backgroundColor: "#D1B24C"}}component={Link} to="/bsignup" style={{color : "white", borderRadius: 5}} variant="contained">A Business</Button>
        <Button sx={{backgroundColor: "#D1B24C"}}component={Link} to="/doncensignup" style={{color : "white", borderRadius: 5}} variant="contained">A Donation Center</Button>
        <Button sx={{backgroundColor: "#D1B24C"}}component={Link} to="/volunteersignup" style={{color : "white", borderRadius: 5}} variant="contained">A Volunteer</Button>
        <Button sx={{backgroundColor: "#D1B24C"}}component={Link} to="/teamsignup" style={{color : "white", borderRadius: 5}} variant="contained">A Team</Button>
        </Box>
        </Box>
        </>
    );
}
export default signup;