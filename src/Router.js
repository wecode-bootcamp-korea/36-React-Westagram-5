import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';

import LoginJHKim from './pages/JHkim/Login/Login';
import MainJHKim from './pages/JHkim/Main/Main';

import LoginJHSo from './pages/JHso/Login/Login';
import MainJHSo from './pages/JHso/Main/Main';

import LoginJSHam from './pages/JSham/Login/Login';
import MainJSHam from './pages/JSham/Main/Main';

import LoginSYHa from './pages/SYha/Login/Login';
import MainSYHa from './pages/SYha/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/logink" element={<LoginJHKim />} />
        <Route path="/maink" element={<MainJHKim />} />
        <Route path="/logins" element={<LoginJHSo />} />
        <Route path="/mains" element={<MainJHSo />} />
        <Route path="/loginh" element={<LoginJSHam />} />
        <Route path="/mainh" element={<MainJSHam />} />
        <Route path="/loginha" element={<LoginSYHa />} />
        <Route path="/mainha" element={<MainSYHa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
