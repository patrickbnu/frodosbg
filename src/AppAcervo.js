import React, { useEffect, useState } from 'react';
import LinksPage from './components/LinksPage'; // importa o LinksPage correto

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
        //window.location.href = 'https://frodosbg.acervodejogos.com.br';
        break;
    }
  }, []);

  if (true) {
    return <LinksPage />;
  }

  return null;
}

export default AppAcervo;
