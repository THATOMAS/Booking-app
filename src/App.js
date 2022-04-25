import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import LandingPage from "./routes/LandingPage";
import Home from "./routes/HomePage";
import Furniture from "./routes/Furniture";
import Shop from "./routes/Shop";
import AboutUs from "./routes/AboutUs";

const App = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/welcome" element={<Home />} />
          <Route path="/welcome/furniture" element={<Furniture />} />
          <Route path="/welcome/shop" element={<Shop />} />
          <Route path="/welcome/about-us" element={<AboutUs />} />
          <Route path="/welcome/contact-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
