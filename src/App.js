import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListMission from './components/pages/listMission/ListMission';
import ListRocket from './components/pages/ListRocket/ListRocket';
import Profile from './components/pages/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ListRocket />} />
        <Route path="/Missions" element={<ListMission />} />
        <Route path="/myprofile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
