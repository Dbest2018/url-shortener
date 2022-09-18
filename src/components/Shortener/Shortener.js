import React from "react";
import "./Shortener.css";

const Shortener = () => {
  return (
    <div className="shortener">
      <input
        className="shortener__input"
        type="text"
        placeholder="Shorten a link here..."
      />
      <div className="shortener__button">Shorten It!</div>
    </div>
  );
};

export default Shortener;
