import React, { useState, useEffect } from 'react';
import "../styles/global.css";

const initialColaboradores = [
  { nome: "João Silva", telefone: "123456789", cpf: "11122233344" },
  { nome: "Maria Oliveira", telefone: "987654321", cpf: "55566677788" },
  // Adicione mais colaboradores aqui...
];

const Colaboradores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredColaboradores, setFilteredColaboradores] = useState(initialColaboradores);

  useEffect(() => {
    const filtered = initialColaboradores.filter(colaborador => 
      colaborador.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      colaborador.telefone.includes(searchTerm) ||
      colaborador.cpf.includes(searchTerm)
    );
    setFilteredColaboradores(filtered);
  }, [searchTerm]);

  return (
    <div className="main-content-holder">
      
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Pesquisar por nome, telefone ou CPF" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <ul className="colaboradores-list">
        {filteredColaboradores.map((colaborador, index) => (
          <li key={index} className="colaborador-item">
            <p>Nome: {colaborador.nome}</p>
            <p>Telefone: {colaborador.telefone}</p>
            <p>CPF: {colaborador.cpf}</p>
          </li>
        ))}
      </ul>
      <button className='button-cadastro'>
        Criar novo Colaborador
      </button>
    </div>
  )
}

export default Colaboradores;
