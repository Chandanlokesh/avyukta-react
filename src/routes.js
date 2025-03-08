import React from 'react';
import { BrowserRouter as Router, Route, Routes as RouterRoutes } from 'react-router-dom';
import LandingPage from './pages/main';
import RegistrationStatsList from './pages/Registrations';


const AppRoutes = () => (
  <Router>
    <RouterRoutes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<RegistrationStatsList />} />
    </RouterRoutes>
  </Router>
);

export default AppRoutes;
