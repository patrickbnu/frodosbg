import React, { useState } from 'react';

function LinksPage() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      background: 'linear-gradient(135deg, rgb(254, 251, 233), #fff6c8)',
    },
    content: {
      width: '100%',
      maxWidth: '500px', // aumentei o tamanho para desktop
      textAlign: 'center',
      background: '#fff6c8',
      padding: '40px 30px',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    },
    avatar: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      marginBottom: '20px',
    },
    title: {
      fontSize: '28px',
      marginBottom: '10px',
      color: 'rgb(29, 44, 25)',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: '18px',
      marginBottom: '40px',
      color: 'rgb(29, 44, 25)',
    },
    links: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginTop: '30px',
    },
    button: (isHovered) => ({
      display: 'block',
      padding: '15px',
      borderRadius: '10px',
      background: isHovered ? '#915f0f' : '#B17A16',
      color: '#fff6c8',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: '18px',
      transition: 'background 0.3s ease',
    }),
  };

  const links = [
    { href: 'https://loja.frodosbg.com.br/', label: '🛒 Loja de Jogos' },
    { href: 'https://frodosbg.acervodejogos.com.br/', label: '📚 Aluguel de Jogos' },
    { href: 'https://instagram.com/frodosbg', label: '📸 Instagram' },
    { href: 'https://wa.me/5547999826190', label: '💬 WhatsApp' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        { /*<img src="/favicon.ico" alt="Frodo's BG" style={styles.avatar} /> */}

        <h1 style={styles.title}>Frodo's Board Games</h1>
        <p style={styles.subtitle}>Venda e Aluguel de Jogos de Tabuleiro</p>

        <div style={styles.links}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button(hoveredButton === index)}
              onMouseEnter={() => setHoveredButton(index)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinksPage;
