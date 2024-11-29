import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Main from "../pages/Main";
import Details from "../pages/Details";
import Planets from "../pages/Planets";
import DetailsPlanet from "../pages/DetailsPlanet";

const AppRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/detailsPlanet/:id" element={<DetailsPlanet />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRoutes;
