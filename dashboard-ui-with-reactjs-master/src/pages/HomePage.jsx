// src/pages/HomePage.js
import React from 'react';
import Report from '../components/Report/Report';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Report />
      </div>
      <div className="content-grid-two">
        <div className="grid-two-item">
          <div className="subgrid-two"></div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
