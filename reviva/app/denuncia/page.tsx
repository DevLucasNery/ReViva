"use client";

import { useState } from "react";

export default function DenunciaPage() {
  const [formData, setFormData] = useState({
    local: "",
    hora: "",
    descricao: "",
    tipo: "fauna",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Enviando dados: ", formData);

    alert("Denúncia enviada com sucesso!");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px", 
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          padding: "30px", 
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#065f46", textAlign: "center" }}>Denunciar</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#065f46" }}>
              Local:
            </label>
            <input
              type="text"
              name="local"
              value={formData.local}
              onChange={handleChange}
              placeholder="Digite o local"
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #10b981",
                borderRadius: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#065f46" }}>
              Hora:
            </label>
            <input
              type="datetime-local"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #10b981",
                borderRadius: "5px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#065f46" }}>
              Descrição:
            </label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              placeholder="Descreva o ocorrido"
              required
              rows={4}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #10b981",
                borderRadius: "5px",
              }}
            ></textarea>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", color: "#065f46" }}>
              Tipo de Denúncia:
            </label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #10b981",
                borderRadius: "5px",
              }}
            >
              <option value="fauna">Fauna</option>
              <option value="flora">Flora</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#10b981",
              color: "#ffffff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Enviar Denúncia
          </button>
        </form>
      </div>
    </div>
  );
}
