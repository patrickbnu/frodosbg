import React, { useEffect } from 'react';

function AppAcervo() {
  useEffect(() => {
    const path = window.location.pathname;
    const hostname = window.location.hostname;

    // Se já estiver no links.frodosbg.com.br, não faz nada
    if (hostname === 'links.frodosbg.com.br') {
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

  return null; // Não renderiza nada, pois redireciona imediatamente
}

export default AppAcervo;