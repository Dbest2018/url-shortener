import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__hero">
        <Hero />
      </div>
      <div className="app__main">
        <div className="main-shortener">{/* Shortener  */}</div>
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
