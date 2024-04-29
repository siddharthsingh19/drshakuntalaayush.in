import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import App from "../App";

const Root = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
        <App />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
