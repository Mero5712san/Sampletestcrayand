import React from 'react';
import Appbar from '../components/Appbar/Index'
import Home from '../pages/Home/Index'
import Cart from '../pages/Cart/Index'
import Login from '../pages/Login/Index'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routecomp = () => {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routecomp;
