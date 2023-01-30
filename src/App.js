import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ListMission from './components/pages/ListMission';
import ListRockect from './components/pages/ListRockect';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ListRockect />} />
        <Route path="/Missions" element={<ListMission />} />
        <Route path="/My Profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;