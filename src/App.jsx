import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/nav-components/navbar/Navbar";
import Footer from "./components/footere-components/Footer";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
