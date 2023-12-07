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
          <Link className="search-link" to="/search">Search</Link>
          <div className="btn-container">
            <Button size="medium" rounded transparent outline>
              SIGN IN
            </Button>
            <Button size="medium" rounded color="blue">JOIN</Button>
          </div>
        </div>
        <span className="mobile-menu-btn">
            <MdMenu className="mobile-menu-icon"/>
        </span>
      </div>
    </nav>
  );
};

export default Nav;
