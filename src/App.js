import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import Shortener from "./components/Shortener/Shortener";
import Short from "./components/Short/Short";

function App() {
  const [urls, setUrls] = useState([{ longUrl: "", shortUrl: "" }]);

  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__hero">
        <Hero />
      </div>
      <div className="app__main">
        <div className="main-shortener">
          <Shortener urls={urls} setUrls={setUrls} />
        </div>
        {urls.length > 0 && (
          <div className="main-short">
            {urls.map((url, index) => (
              <Short url={url} key={index} />
            ))}
          </div>
        )}

        <div className="main-stats">
          <Stats />
        </div>
      </div>
      <div className="app__cta">
        <CTA />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
