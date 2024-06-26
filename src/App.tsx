import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoutes from './modules/public/publicRoutes';
 import './App.scss';
import AuthRoutes from './modules/auth/authRoutes';
// import PublicRoutes from './modules/public/publicRoutes';
// import AuthRoutes from './modules/auth/authRoutes';
// import PropertyRoutes from './modules/properties/propertyRoutes';
// import AdminRoutes from './modules/admin/adminRoutes';

const App: React.FC = () => {
  return (
    <Router>
         <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <Routes>
          {/* <Route path="/login/*" element={<AuthRoutes />} />
          <Route path="/register/*" element={<AuthRoutes />} />
          <Route path="/forgot-password/*" element={<AuthRoutes />} />
          <Route path="/properties/*" element={<PropertyRoutes />} />
          <Route path="/property/:id/*" element={<PropertyRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} /> */}
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/auth/*" element={<AuthRoutes />} />

          

        </Routes>
      </main>
      </div>
    </Router>
  );
};

export default App;
