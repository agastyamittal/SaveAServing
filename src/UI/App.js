import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBarbfs from './NavBar_bfs';
import Businesses from './businesses';
import DonCen from './doncen';
import Volunteer from './volunteer';
import Team from './team';
import WHM from './whm';
import ComDash from './comdash';
import LogInLanding from './loginLanding';
import SignUpLanding from './signupLanding'; 
import BSignUp from './bsignup';
import DonCenSignUp from './doncensignup';
import VolunteerSignUp from './volunteersignup'; 
import TeamSignUp from './teamsignup';
import BLogIn from './blogin';
import DonCenLogIn from './doncenlogin';
import VolunteerLogIn from './volunteerlogin'; 
import TeamLogIn from './teamlogin';
import Businessdash from './businessdash';
import DonCendash from './doncendash';
import Volunteerdash from './volunteerdash';
import Teamdash from './teamdash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBarbfs />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/doncen" element={<DonCen />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/whm" element={<WHM />} />
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
  );
}

export default App;
