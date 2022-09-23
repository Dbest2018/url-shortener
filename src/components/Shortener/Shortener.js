import { useEffect, useState } from "react";
import "./Shortener.css";

const Shortener = ({ urls, setUrls }) => {
  const [url, setUrl] = useState("");
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
    const shortUrl = url.concat(" is shortened");
    const newUrl = {
      longUrl: url,
      shortUrl,
    };
    console.log(newUrl.longUrl, newUrl.shortUrl);
    setUrls((prevUrls) => [...prevUrls, newUrl]);
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
