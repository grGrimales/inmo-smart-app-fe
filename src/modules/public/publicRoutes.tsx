import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

const PublicRoutes: React.FC = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />

      </Routes>

      <Footer />

    </>
  );
};

export default PublicRoutes;
