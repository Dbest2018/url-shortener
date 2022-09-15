import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logo} alt="footer logo" />
      </div>
      <div className="footer__info">
        <div className="info__item">
          <div className="item-title">Features</div>
          <div>Link Shortening</div>
          <div>Branded Links</div>
          <div>Analytics</div>
        </div>
        <div className="info__item">
          <div className="item-title">Resources</div>
          <div>Blog</div>
          <div>Developers</div>
          <div>Support</div>
        </div>
        <div className="info__item">
          <div className="item-title">Company</div>
          <div>About</div>
          <div>Our Team</div>
          <div>Careers</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="footer__icons">
        <div className="icon">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="icon">
          <img src={twitter} alt="twitter" />
        </div>
        <div className="icon">
          <img src={pinterest} alt="pintrest" />
        </div>
        <div className="icon">
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
