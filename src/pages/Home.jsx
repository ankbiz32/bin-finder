import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>

      <div className="globe-section d-flex align-center">
        <h2 className="bin-finder">Bin Finder</h2>
        <img
          src="images/Rotating_earth_animated_transparent.gif" // Replace with your globe image source
          alt="Globe"
          className="globe"
        />
      </div>

      {/* Grid Sections */}
      <div className="grid-section">
        <div className="grid-title">Top Bins Near Me</div>
        <div className="grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>

      <div className="grid-section">
        <div className="grid-title">Bin Top Items</div>
        <div className="grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>

      <div className="grid-section">
        <div className="grid-title">Reseller IQ Portal</div>
        <div className="grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
