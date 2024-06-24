import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContentTop from './components/ContentTop';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Servico from './components/Servico';
import Ordem from './components/Ordem';
import Colaboradores from './components/Colaboradores';
import Ativos from './components/Ativos';
import Estoque from './components/Estoque';
import Mapa from './components/Mapa';


import Login from './pages/Login';

// Importe outros componentes aqui...

const App = () => {
  const isAuthenticated = true; // Alterar para lógica real de autenticação

  return (
    <Router>
      {isAuthenticated ? (
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<><ContentTop title="Dashboard" /><Dashboard /></>} />
              <Route path="/servico" element={<><ContentTop title="Serviço de Manutenção" /><Servico /></>} />
              <Route path="/ordem" element={<><ContentTop title="Ordem de Serviço" /><Ordem /></>} />
              <Route path="/colaboradores" element={<><ContentTop title="Colaboradores" /><Colaboradores /></>} />
              <Route path="/ativos" element={<><ContentTop title="Ativos" /><Ativos /></>} />
              <Route path="/estoque" element={<><ContentTop title="Estoque" /><Estoque /></>} />
              <Route path="/mapa" element={<><ContentTop title="Mapa" /><Mapa /></>} />
              {/* Adicione outras rotas aqui... */}
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
