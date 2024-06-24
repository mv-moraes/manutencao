// src/layout/Sidebar/Sidebar.js
import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../data/data';
import { SidebarContext } from '../../context/sidebarContext';
import './Sidebar.css';

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass('sidebar-change');
    } else {
      setSidebarClass('');
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          {/* Image Placeholder */}
        </div>
        <span className="info-name">Manutenção</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <Link
                to={`/${navigationLink.title.toLowerCase().replace(/ /g, '-')}`}
                className={`nav-link ${navigationLink.id === activeLinkIdx ? 'active' : ''}`}
                onClick={() => setActiveLinkIdx(navigationLink.id)}
              >
                <img src={navigationLink.image} className="nav-link-icon" alt={navigationLink.title} />
                <span className="nav-link-text">{navigationLink.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
