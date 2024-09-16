// routers/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact/>

    </Routes>
  );
};

export default Router;
