import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h3>Aluguel de Jogos de Tabuleiro</h3>

      <p>
        <a href="https://bit.ly/aluguel-bnu" target="_blank"        >
          Para mais detalhes acesse aqui.
        </a>
        <br />
        <h5> Lista de Jogos abaixo</h5>
      </p>
      <Table/>
    </main>
  );
}

export default App;
