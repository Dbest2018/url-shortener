import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="left-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="left-nav">
          <div className="nav-item">Features</div>
          <div className="nav-item">Pricing</div>
          <div className="nav-item">Resources</div>
        </div>
      </div>
      <div className="header__right">
        <div className="right-login">Login</div>
        <div className="right-signup">Sign Up</div>
      </div>
    </div>
  );
};

export default Header;
