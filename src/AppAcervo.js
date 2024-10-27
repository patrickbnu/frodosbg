import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = 'https://frodosbg.acervodejogos.com.br/'; 
  }, []);

  return null; // Não renderiza nada, pois redireciona imediatamente
}

export default App;
