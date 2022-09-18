import React from "react";
import "./Stats.css";
import brand from "../../images/icon-brand-recognition.svg";
import records from "../../images/icon-detailed-records.svg";
import custom from "../../images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__header">
        <div className="header-title">Advanced Statistics</div>
        <div className="header-text">
          Track how your links are performing across the web with our advanced
          statistics dashbord
        </div>
      </div>
      <div className="stats__main">
        <div className="dashboard">
          <div className="dashboard-image">
            <img src={brand} alt="brand" />
          </div>

          <div className="dashboard-title">Brand Recognition</div>
          <div className="dashboard-text">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instill confidence in your content.
          </div>
        </div>
        <div className="green-line"></div>
        <div className="dashboard slide">
          <div className="dashboard-image">
            <img src={records} alt="brand" />
          </div>
          <div className="dashboard-title">Detailed Records</div>
          <div className="dashboard-text">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </div>
        </div>
        <div className="green-line"></div>
        <div className="dashboard slide-one">
          <div className="dashboard-image">
            <img src={custom} alt="brand" />
          </div>
          <div className="dashboard-title">Fully Customizable</div>
          <div className="dashboard-text">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
