"use client";

import React from "react";

interface Localidade {
  id: number;
  nome: string;
  descricao: string;
  latitude: number;
  longitude: number;
}

const localidades: Localidade[] = [
  {
    id: 1,
    nome: "Ponto de Coleta Seletiva",
    descricao: "Local destinado à coleta seletiva.",
    latitude: -10.185213485691964,
    longitude: -48.305318734389324,
  },
  {
    id: 2,
    nome: "Ponto de Coleta Eletronica",
    descricao: "Para coletas de lixo eletronica, baterias e metais.",
    latitude: -10.17406729731575,
    longitude: -48.30030389598617,
  },
  {
    id: 3,
    nome: "Estação de Compostagem Comunitária",
    descricao: "Transformação de resíduos orgânicos em adubo sustentável.",
    latitude: -23.56792,
    longitude: -46.647003,
  },
];

const Page: React.FC = () => {
  const abrirNoMaps = (latitude: number, longitude: number) => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <h2>🌍 Listagem de Localidades Ambientais</h2>
      <p>Confira os pontos de sustentabilidade e ações ambientais próximos de você.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {localidades.map((localidade) => (
          <li
            key={localidade.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ margin: 0 }}>{localidade.nome}</h3>
            <p style={{ margin: "5px 0" }}>{localidade.descricao}</p>
            <button
              onClick={() => abrirNoMaps(localidade.latitude, localidade.longitude)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 15px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Ver no Google Maps
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
