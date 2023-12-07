import React from "react";

import "../src/styles/RootLayout.scss"
import Nav from "./components/Nav";

import { Outlet,} from "react-router-dom";

const RooLayout = () => {
  return <div className="wrapper">
      <Nav />
      <Outlet />
    </div>;
};

export default RooLayout;
