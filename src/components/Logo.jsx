import React from "react";

import { Link } from "react-router-dom";

import logo from "../assets/globalpenfriends-logo.gif";

import "../styles/Logo.scss"

const Logo = () => {
  return (
    <h1 className="logo">
      <Link to="/">
        <img className="logo-img" src={logo} alt="global penfriends" />
      </Link>
    </h1>
  );
};

export default Logo;
