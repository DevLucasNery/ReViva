// app/denuncia/layout.tsx
import { ReactNode } from "react";

export default function DenunciaLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f0fdf4", color: "#065f46" }}>
      <header style={{ backgroundColor: "#10b981", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
        <h1 style={{ margin: 0, color: "#ffffff" }}>🌿 Portal de Denúncias - Fauna e Flora</h1>
      </header>
      <main>{children}</main>
      <footer
        style={{
          borderTop: "2px solid #10b981",
          marginTop: "20px",
          paddingTop: "10px",
          textAlign: "center",
          color: "#065f46",
        }}
      >
        <p>© {new Date().getFullYear()} - Proteção Ambiental</p>
      </footer>
    </div>
  );
}
