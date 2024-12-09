import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <h1>🌿 Iniciativas Ambientais</h1>
      </header>
      <main
        style={{
          flex: 1, // Faz o conteúdo ocupar o espaço disponível, empurrando o footer para baixo
          padding: "20px",
        }}
      >
        {children}
      </main>
      <footer
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          textAlign: "center",
          position: "sticky", // Alternativa: Use "fixed" para fixar no viewport.
          bottom: 0,
        }}
      >
        <p>© 2024 Sustentabilidade em Ação</p>
      </footer>
    </div>
  );
};

export default Layout;
