import Typography from '@mui/material/Typography';
import AuthStatus from './AuthStatus';
import Login from './Login';
import NavBar from './mainnavbar';
import './styles/global.css';
import './styles/volunteer.css';

function volunteerlogin(){
    return (
        <>
        <NavBar/>        <div className="volunteer-container">
          <Typography variant="h3" className="page-title">Login to your Volunteer Account</Typography>
        </div>
        <div className="auth-section">
      <AuthStatus />
      <Login redirectRoute = "/volunteerdash"/>
    </div>
        </>
    );
}
export default volunteerlogin;