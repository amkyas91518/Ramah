import React from "react";
import { Routes, Route } from "react-router-dom";
import AllOffers from "./components/AllOffers";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import UserOrders from "./components/UserOrders";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="all-offers" element={<AllOffers />} />
        <Route path="user-orders" element={<UserOrders />} />
      </Routes>
    </>
  );
}

export default App;
