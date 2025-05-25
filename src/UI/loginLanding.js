import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import NavBar from './mainnavbar';

function loginLanding() {
  return (
    <>
      <NavBar />
      <Box marginTop="20px" alignItems="center" justifyContent="center" display="flex">
        <Typography align="center" variant="h3" sx={{ fontWeight: "600" }} marginTop="50px">Log In</Typography>
      </Box>
      <Typography align="center" variant="h5" sx={{ fontWeight: "600" }} marginTop="50px"></Typography>
      <Box marginTop="75px" alignItems="center" justifyContent="center" display="flex">
        <Box display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '75%', padding: 1 }} >
          <Button component={Link} to="/blogin" style={{ color: "white", borderRadius: 5, backgroundColor: "#024abf" }} variant="contained">A Business</Button>
          <Button component={Link} to="/doncenlogin" style={{ color: "white", borderRadius: 5, backgroundColor: "#024abf" }} variant="contained">A Donation Center</Button>
          <Button component={Link} to="/volunteerlogin" style={{ color: "white", borderRadius: 5, backgroundColor: "#024abf" }} variant="contained">A Volunteer</Button>
          <Button component={Link} to="/teamlogin" style={{ color: "white", borderRadius: 5, backgroundColor: "#024abf" }} variant="contained">A Team</Button>
        </Box>
      </Box>
    </>
  );
}
export default loginLanding;