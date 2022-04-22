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

const App = () => {
  return (
    <main>
      <Router>
        <Outlet />

        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/welcome" element={<Home />} />
          <Route path="furniture" element={<Furniture />} />
          <Route path="shop" element={<Shop />} />
          <Route path="aboutUs" element={<aboutUs />} />
          <Route path="contactUs" element={<aboutUs />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
