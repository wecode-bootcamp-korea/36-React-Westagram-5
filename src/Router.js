import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path="/LoginJHKim" element={<LoginJHKim />} />
        <Route path="/MainJHKim" element={<LoginJHKim />} />
        <Route path="/LoginJHSo" element={<LoginJHSo />} />
        <Route path="/MainJHSo" element={<LoginJHSo />} />
        <Route path="/LoginJSHam" element={<LoginJSHam />} />
        <Route path="/MainJSHam" element={<LoginJSHam />} />
        <Route path="/LoginSYHa" element={<LoginSYHa />} />
        <Route path="/MainSYHa" element={<LoginSYHa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
