import React from "react";
import "./Hero.css";
import heroImage from "../../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__info">
        <div className="info-title">More than just shorter links</div>
        <div className="info-text">
          Build your brand's recognition and got detailed insights on how your
          links are performing.
        </div>
        <div className="info-button">Get Started</div>
      </div>
      <div>
        <img className="hero__image" src={heroImage} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
