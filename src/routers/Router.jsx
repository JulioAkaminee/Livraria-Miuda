// routers/Router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';

import Favoritos from '../Pages/Favoritos'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Favoritos />} exact/>

    </Routes>
  );
};

export default Router;
