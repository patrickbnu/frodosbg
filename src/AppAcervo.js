import React, { useEffect } from 'react';

function AppAcervo() {
  useEffect(() => {
    const path = window.location.pathname;

    if (path === '/assinatura') {
      window.location.href = 'https://frodosbg.acervodejogos.com.br/plans/index';
    } if (path === '/loja') {
      window.location.href = 'https://loja.frodosbg.com.br/';
    } else {
      window.location.href = 'https://frodosbg.acervodejogos.com.br/';
    }
  }, []);

  return null; // Não renderiza nada, pois redireciona imediatamente
}

export default AppAcervo;
