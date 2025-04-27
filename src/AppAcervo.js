import React, { useEffect, useState } from 'react';

function AppAcervo() {
  const [isLinksDomain, setIsLinksDomain] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const hostname = window.location.hostname;

    if (hostname === 'links.frodosbg.com.br') {
      setIsLinksDomain(true);
      return;
    }

    switch (path) {
      case '/assinatura':
        window.location.href = 'https://frodosbg.acervodejogos.com.br/plans/index';
        break;
      case '/loja':
        window.location.href = 'https://loja.frodosbg.com.br/';
        break;
      case '/links':
        window.location.href = 'https://links.frodosbg.com.br/';
        break;
      default:
        window.location.href = 'https://frodosbg.acervodejogos.com.br';
        break;
    }
  }, []);

  if (isLinksDomain) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Bem-vindo ao Frodo's Links!</h1>
        <p>Escolha um dos links abaixo:</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><a href="https://loja.frodosbg.com.br">🛒 Loja de Jogos</a></li>
          <li><a href="https://frodosbg.acervodejogos.com.br">🎲 Acervo de Jogos</a></li>
          <li><a href="https://instagram.com/frodosbg">📸 Instagram</a></li>
        </ul>
      </div>
    );
  }

  return null; // Se não for links.frodosbg.com.br, deixa o redirecionamento normal
}

export default AppAcervo;
