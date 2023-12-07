import React from "react";

import "../styles/Nav.scss";

import { MdMenu } from "react-icons/md";
import Logo from "./Logo";

import { Link } from "react-router-dom";
import Button from "./Button";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Logo />
        <div className="link-container">
          <Link to="/search">Search</Link>
          <div className="btn-container">
            <Button size="large" outline>
              SIGN IN
            </Button>
            <Button color="blue">JOIN</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
