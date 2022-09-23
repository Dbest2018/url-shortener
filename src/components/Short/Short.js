import React from "react";
import "./Short.css";

const Short = ({ url }) => {
  return (
    <div className="short">
      <div className="short__long">{url.longUrl}</div>
      <div className="short__right">
        <div className="short__short">{url.shortUrl}</div>
        <div className="short__button">copy</div>
      </div>
    </div>
  );
};

export default Short;
