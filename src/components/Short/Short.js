import React, { useState } from "react";
import "./Short.css";

const Short = ({ url }) => {
  const [buttonText, setButtonText] = useState("Copy");
  const [isCopied, setIsCopied] = useState(false);

  const buttonStyle = {
    backgroundColor: isCopied && "var(--dviolet)",
  };
  const handleClick = () => {
    navigator.clipboard.writeText(url.shortUrl);
    setButtonText("Copied!");
    setIsCopied(true);
  };
  return (
    <div className="short">
      <div className="short__long">{url.longUrl}</div>
      <div className="short__right">
        <div className="short__short">{url.shortUrl}</div>
        <div
          className="short__button"
          onClick={handleClick}
          style={buttonStyle}
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default Short;
