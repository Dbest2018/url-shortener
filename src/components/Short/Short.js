import React, { useState } from "react";
import "./Short.css";

const Short = ({ url }) => {
  const [buttonText, setButtonText] = useState("Copy");

  const handleClick = () => {
    navigator.clipboard.writeText(url.shortUrl);
    setButtonText("Copied");
  };
  return (
    <div className="short">
      <div className="short__long">{url.longUrl}</div>
      <div className="short__right">
        <div className="short__short">{url.shortUrl}</div>
        <div className="short__button" onClick={handleClick}>
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default Short;
