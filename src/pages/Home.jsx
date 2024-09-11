import React from 'react';
import Item from '../components/Item';

const Home = () => {
  return (
    <div>

      <div className="globe-section d-flex align-center justify-center">
        <h2 className="bin-finder">Bin <br /> Finder</h2>
        <img
          src="images/Rotating_earth_animated_transparent.gif"
          alt="Globe"
          className="globe"
        />
      </div>

      {/* Grid Sections */}
      <div className="grid-section">
        <div className="grid-title">Top Bins Near Me</div>
        <div className="grid">
          <Item url="https://placehold.co/600x400"></Item>
          <Item url="https://placehold.co/600x400"></Item>
          <Item url="https://placehold.co/600x400"></Item>
          <Item url="https://placehold.co/600x400"></Item>
        </div>
      </div>

      <div className="grid-section">
        <div className="grid-title">Bin Top Items</div>
        <div className="grid">
          <Item url="https://placehold.co/600"></Item>
          <Item url="https://placehold.co/600"></Item>
          <Item url="https://placehold.co/600"></Item>
          <Item url="https://placehold.co/600"></Item>
        </div>
      </div>

      <div className="grid-section">
        <div className="grid-title">Reseller IQ Portal</div>
        <div className="grid">

          <Item url="https://placehold.co/400"></Item>
          <Item url="https://placehold.co/400"></Item>
          <Item url="https://placehold.co/400"></Item>
          <Item url="https://placehold.co/400"></Item>
        </div>
      </div>
    </div>
  );
};

export default Home;
