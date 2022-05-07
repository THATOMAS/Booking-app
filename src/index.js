import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";



import LandingPage from "./routes/LandingPage";
import Furniture from "./routes/Furniture";
import Shop from "./routes/Shop";
import AboutUs from "./routes/AboutUs";
import WelcomePage from "./routes/WelcomePage";


ReactDom.render(
      <Router>
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/welcome" element={<App />}>
          <Route index element={<WelcomePage/>} />  
          <Route path="/welcome/ChairsAndSofas" element={<Furniture />}/>
          <Route path="/welcome/Tables" element={<Furniture />} />
          <Route path="/welcome/LightsAndChandeliers" element={<Furniture />} />
          <Route path="/welcome/shop" element={<Shop />} />
          <Route path="/welcome/about-us" element={<AboutUs />} />
          <Route path="/welcome/contact-us" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>, document.getElementById("root"));
