import React, { useEffect, useState } from 'react';
import LinksPage from './components/LinksPage';

function AppAcervo() {
  const [isLinksDomain, setIsLinksDomain] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const hostname = window.location.hostname;

    if (hostname === 'links.frodosbg.com.br') {
      setIsLinksDomain(true);
      return;
    }

    if (path.startsWith('/jogo/')) {
      const jogoId = path.replace('/jogo/', '');
      if (jogoId) {
        window.location.href = `https://frodosbg.acervodejogos.com.br/boardgames/${jogoId}`;
        return;
      }
    }

    switch (path) {
      case '/missaobcx': {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1; 
      
        if (month === 4) {
          switch (day) {
            case 17: // Sexta
              window.location.href = 'https://www.instagram.com/p/DXOBf_GDLp2/';
              break;
            case 18: // Sábado
              window.location.href = 'https://www.instagram.com/p/DXOBl4vDLcO/';
              break;
            case 19: // Domingo
              window.location.href = 'https://www.instagram.com/p/DXOBxZPjP2L/';
              break;
            default:
              window.location.href = 'https://www.instagram.com/missaobcx';
              break;
          }
        } else {
          window.location.href = 'https://www.instagram.com/missaobcx';
        }
      
        break;
      }
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
    return <LinksPage />;
  }

  return null;
}

export default AppAcervo;
