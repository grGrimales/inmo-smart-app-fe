import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home';

const PublicRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default PublicRoutes;
