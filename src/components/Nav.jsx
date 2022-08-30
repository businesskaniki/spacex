import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Rockets from './Rockets';
import favicon from './Assets/saturn.png';
import Profile from './Profile';
import Missions from './mission/Missions';

const Nav = () => (
  <>
    <header className="header">
      <div className="divIcon">
        <img src={favicon} alt="fjstudio" height={50} width={50} />
        <h1>Space Travel&apos;s Hub</h1>
      </div>
      <nav className="navbar">
        <div className="nav-pills">
          <NavLink className="link" to="/Rockets">
            Rockets
          </NavLink>
          <NavLink className="link" to="/Missions">
            Missions
          </NavLink>
          <NavLink className="link" to="/Profile">
            My profile
          </NavLink>
        </div>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/Rockets" element={<Rockets />} />
      <Route path="/Missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default Nav;
