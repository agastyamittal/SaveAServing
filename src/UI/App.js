import { ThemeProvider } from '@mui/material/styles';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import theme from '../theme.js';
import BLogIn from './blogin';
import BSignUp from './bsignup';
import Businessdash from './businessdash';
import Businesses from './businesses';
import ComDash from './comdash';
import DonationCenter from './donationcenter';
import DonCendash from './doncendash';
import DonCenLogIn from './doncenlogin';
import DonCenSignUp from './doncensignup';
import LogInLanding from './loginLanding';
import MainPage from './mainpage';
import SignUpLanding from './signupLanding';
import Team from './team';
import Teamdash from './teamdash';
import TeamLogIn from './teamlogin';
import TeamSignUp from './teamsignup';
import Volunteer from './volunteer';
import Volunteerdash from './volunteerdash';
import VolunteerLogIn from './volunteerlogin';
import VolunteerSignUp from './volunteersignup';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/doncen" element={<DonationCenter />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/team" element={<Team />} />
          <Route path="/comdash" element={<ComDash />} />
          <Route path="/login" element={<LogInLanding />} />
          <Route path="/signup" element={<SignUpLanding />} />
          <Route path="/bsignup" element={<BSignUp />} />
          <Route path="/doncensignup" element={<DonCenSignUp />} />
          <Route path="/volunteersignup" element={<VolunteerSignUp />} />
          <Route path="/teamsignup" element={<TeamSignUp />} />
          <Route path="/blogin" element={<BLogIn />} />
          <Route path="/doncenlogin" element={<DonCenLogIn />} />
          <Route path="/volunteerlogin" element={<VolunteerLogIn />} />
          <Route path="/teamlogin" element={<TeamLogIn />} />
          <Route path="/bdash" element={<Businessdash />} />
          <Route path="/doncendash" element={<DonCendash />} />
          <Route path="/volunteerdash" element={<Volunteerdash />} />
          <Route path="/teamdash" element={<Teamdash />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;