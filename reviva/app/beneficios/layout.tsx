import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🌿 Recicle Mais, Viva Melhor 🌎</h1>
      </header>
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} RecicleMais - Todos os direitos reservados.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f9f4',
    color: '#2d2d2d',
  },
  header: {
    backgroundColor: '#2c7744',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '5px',
  },
  main: {
    flex: 1,
    padding: '20px',
  },
  footer: {
    backgroundColor: '#2c7744',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    borderTop: '2px solid #2d2d2d',
  },
};

export default Layout;
