import { useEffect, useState } from "react";
import "./Shortener.css";

const Shortener = ({ urls, setUrls }) => {
  // change the space to empty string and see what happens :)
  const [url, setUrl] = useState(" ");
  const [error, setError] = useState(false);

  useEffect(() => {
    setUrl("");
    setError(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url === "") {
      setError(true);
      return;
    }
    let shortUrl = "";
    const shortenUrl = async () => {
      const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
      const data = await res.json();
      shortUrl = data.result.full_short_link;
      const newUrl = {
        longUrl: url,
        shortUrl,
      };
      setUrls((prevUrls) => [...prevUrls, newUrl]);
      setUrl("");
    };
    try {
      shortenUrl();
    } catch (e) {
      console.log("Unable to shorten url, because ", e);
    }
  };
  const handleChange = (e) => {
    if (error) {
      setError(false);
    }
    setUrl(e.target.value);
  };
  return (
    <div className="shortener">
      <div className="shortener__left">
        <input
          className="shortener__input"
          type="text"
          value={url}
          onChange={handleChange}
          placeholder="Shorten a link here..."
        />
        {error && <div className="error">Please add a link</div>}
      </div>
      <div className="shortener__button" onClick={handleSubmit}>
        Shorten It!
      </div>
    </div>
  );
};

export default Shortener;
