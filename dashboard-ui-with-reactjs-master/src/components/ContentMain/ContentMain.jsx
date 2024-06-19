// src/components/ContentMain/ContentMain.js
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Dashboard from '../../pages/Dashboard';
import ServicoManutencao from '../../pages/ServicoManutencao';
import OrdemServico from '../../pages/OrdemServico';
import Mapa from '../../pages/Mapa';
import Reports from '../../pages/Reports';
import Conta from '../../pages/Conta';
import Configuracoes from '../../pages/Configuracoes';
import './ContentMain.css';

const ContentMain = () => {
  return (
    <div className="main-content">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/servico-manutencao" component={ServicoManutencao} />
        <Route path="/ordem-servico" component={OrdemServico} />
        <Route path="/mapa" component={Mapa} />
        <Route path="/reports" component={Reports} />
        <Route path="/conta" component={Conta} />
        <Route path="/configuracoes" component={Configuracoes} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default ContentMain;
