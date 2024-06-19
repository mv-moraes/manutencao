// src/layout/Content/Content.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Content.css';
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = () => {
  return (
    <Router>
      <div className='main-content'>
        <ContentTop />
        <ContentMain />
      </div>
    </Router>
  )
}

export default Content;
