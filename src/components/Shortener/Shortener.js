import { useState } from "react";
import "./Shortener.css";

const Shortener = ({ urls, setUrls }) => {
  const [url, setUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
    const shortUrl = url.concat(" is shortened");
    const newUrl = {
      longUrl: url,
      shortUrl,
    };
    console.log(newUrl.longUrl, newUrl.shortUrl);
    setUrls((prevUrls) => [...prevUrls, newUrl]);
  };
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <div className="shortener">
      <input
        className="shortener__input"
        type="text"
        onChange={handleChange}
        placeholder="Shorten a link here..."
      />
      <div className="shortener__button" onClick={handleSubmit}>
        Shorten It!
      </div>
    </div>
  );
};

export default Shortener;
