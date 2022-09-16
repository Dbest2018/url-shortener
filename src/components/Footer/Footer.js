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
      <div>
        <img className="footer__logo" src={logo} alt="footer logo" />
      </div>
      <div className="footer__info">
        <div className="info__item">
          <div className="item-title">Features</div>
          <div className="item-text">Link Shortening</div>
          <div className="item-text">Branded Links</div>
          <div className="item-text">Analytics</div>
        </div>
        <div className="info__item">
          <div className="item-title">Resources</div>
          <div className="item-text">Blog</div>
          <div className="item-text">Developers</div>
          <div className="item-text">Support</div>
        </div>
        <div className="info__item">
          <div className="item-title">Company</div>
          <div className="item-text">About</div>
          <div className="item-text">Our Team</div>
          <div className="item-text">Careers</div>
          <div className="item-text">Contact</div>
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
