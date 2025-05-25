import Typography from '@mui/material/Typography';
import AuthStatus from './AuthStatus';
import NavBar from './mainnavbar';
import SignUp from './SignUp';
import './styles/global.css';
import './styles/volunteer.css';

function volunteersignup(){
  return (
    <>
    <NavBar/>    <div className="volunteer-container">
      <Typography variant="h3" className="page-title">Register as a Volunteer</Typography>
    </div>
    <div className="auth-section">
  <AuthStatus />
  <hr />
  <SignUp tableName="volunteer_info"/>
  <hr />
</div>
    </>
    );
}
export default volunteersignup;