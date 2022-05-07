import React from "react";
import {Outlet} from 'react-router-dom'
import Navbar from './routes/HomePage/Navbar/Navbar'


const App = () => {
  return (
    <main >
      <Navbar/>
      <Outlet/>
    </main>
  );
};

export default App;
