import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginCodeKim from "./pages/JHkim/Login/Login";
/* import MainCodeKim from "./pages/JHkim/Main/Main";

import LoginCodeSo from "./pages/JHso/Login/Login";
import MainCodeSo from "./pages/JHso/Main/Main";

import LoginCodeHam from "./pages/JSham/Login/Login";
import MainCodeHam from "./pages/JHham/Main/Main";

import LoginCodeHa from "./pages/SYha/Login/Login";
import MainCodeHa from "./pages/SYha/Main/Main"; */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginCodeKim" element={<LoginCodeKim />} />
        <Route path="/MainCodeKim" element={<LoginCodeKim />} />
        <Route path="/LoginCodeSo" element={<LoginCodeSo />} />
        <Route path="/MainCodeSo" element={<LoginCodeSo />} />
        <Route path="/LoginCodeHam" element={<LoginCodeHam />} />
        <Route path="/MainCodeHam" element={<LoginCodeHam />} />
        <Route path="/LoginCodeHa" element={<LoginCodeHa />} />
        <Route path="/MainCodeHa" element={<LoginCodeHa />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
