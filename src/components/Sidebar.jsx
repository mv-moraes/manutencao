import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import { FaHome, FaTools, FaMapMarkerAlt } from "react-icons/fa";
import { TfiAgenda } from "react-icons/tfi";
import { PiHandCoinsFill } from "react-icons/pi";
import { SidebarContext } from '../Context/sidebarContext';
import { FaHardHat } from "react-icons/fa";
import { FaStore } from "react-icons/fa";

const Sidebar = () => {
    const [activeLinkIdx, setActiveLinkIdx] = useState(0); // Inicialmente, nenhum link está ativo
    const [sidebarClass, setSidebarClass] = useState("");
    const { isSidebarOpen } = useContext(SidebarContext);

    useEffect(() => {
        if (isSidebarOpen) {
            setSidebarClass('sidebar-change');
        } else {
            setSidebarClass('');
        }
    }, [isSidebarOpen]);

    const handleLinkClick = (index) => {
        setActiveLinkIdx(index);
    };

    return (
        <div className={`sidebar ${sidebarClass}`}>
            <div className="user-info">
                <div className="info-img img-fit-cover"></div>
                <span className="info-name">Manutenção</span>
            </div>

            <nav className="navigation">
                <div className='nav-item' onClick={() => handleLinkClick(0)}>
                    <Link to="/" className={`nav-link ${activeLinkIdx === 0 ? 'active' : ''}`}>
                        <FaHome className={`nav-link-icon ${activeLinkIdx === 0 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Dashboard</div>
                    </Link>
                </div>
                <div className='nav-item' onClick={() => handleLinkClick(1)}>
                    <Link to="/servico" className={`nav-link ${activeLinkIdx === 1 ? 'active' : ''}`}>
                        <FaTools className={`nav-link-icon ${activeLinkIdx === 1 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Serviço de Manutenção</div>
                    </Link>
                </div>
                <div className='nav-item' onClick={() => handleLinkClick(2)}>
                    <Link to="/ordem" className={`nav-link ${activeLinkIdx === 2 ? 'active' : ''}`}>
                        <TfiAgenda className={`nav-link-icon ${activeLinkIdx === 2 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Ordem de Serviço</div>
                    </Link>
                </div>
                <div className='nav-item' onClick={() => handleLinkClick(3)}>
                    <Link to="/colaboradores" className={`nav-link ${activeLinkIdx === 3 ? 'active' : ''}`}>
                        <FaHardHat className={`nav-link-icon ${activeLinkIdx === 3 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Colaboradores</div>
                    </Link>
                </div>
                <div className='nav-item' onClick={() => handleLinkClick(4)}>
                    <Link to="/ativos" className={`nav-link ${activeLinkIdx === 4 ? 'active' : ''}`}>
                        <PiHandCoinsFill className={`nav-link-icon ${activeLinkIdx === 4 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Ativos</div>
                    </Link>
                </div>
                <div className='nav-item' onClick={() => handleLinkClick(5)}>
                    <Link to="/estoque" className={`nav-link ${activeLinkIdx === 5 ? 'active' : ''}`}>
                        <FaStore className={`nav-link-icon ${activeLinkIdx === 5 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Estoque</div>
                    </Link>
                </div>
                <div className='nav-item' onClick={() => handleLinkClick(6)}>
                    <Link to="/mapa" className={`nav-link ${activeLinkIdx === 6 ? 'active' : ''}`}>
                        <FaMapMarkerAlt className={`nav-link-icon ${activeLinkIdx === 6 ? 'active-icon' : ''}`} />
                        <div className='nav-link-text'>Mapa</div>
                    </Link>
                </div>
                
            </nav>
        </div>
    );
}

export default Sidebar;
