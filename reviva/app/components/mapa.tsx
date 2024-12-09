"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilos do calendário
import "react-calendar/dist/Calendar.css"; // Estilos base
import "../styles/calendar.css"; // Estilos personalizados


const iconRetinaUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png";
const iconUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const shadowUrl = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export interface Lixeira {
  id: string;
  nome: string;
  posicao: [number, number];
  estaCheia: boolean;
}

interface MapaLeafletProps {
  initialPosition?: [number, number];
  setLixeiras: Dispatch<SetStateAction<Lixeira[]>>;
  lixeiras: Lixeira[];
}

const MapaLeaflet: React.FC<MapaLeafletProps> = ({ initialPosition, lixeiras, setLixeiras }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  const [date, setDate] = useState<Date>(new Date());
  const [tiposColeta, setTiposColeta] = useState({
    reciclavel: false,
    eletronica: false,
    organica: false,
  });

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (isMounted) {
            const { latitude, longitude } = pos.coords;
            setPosition([latitude, longitude]);
          }
        },
        () => {
          return "Não foi possível obter a localização.";
        }
      );
    }

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (mapRef.current && position) {
      mapRef.current.setView(position, 13);
    }
  }, [position]);

  const rota = [
    [-10.273082652961167, -48.34411204344247],
    [-10.27458916184166, -48.34403549059262],
    [-10.274488728139671, -48.34306582116108],
    [-10.270559234502686, -48.343155132819255],
    [-10.270596897612808, -48.34258098644533],
    [-10.273032435874832, -48.342542710020396],
    [-10.273032435874832, -48.341904769604916],
    [-10.270458799520446, -48.341904769604916],
    [-10.270546680131652, -48.341228552764505],
    [-10.273019881602012, -48.3413433820393],
    [-10.273070098690335, -48.3406926828155],
    [-10.270571788873221, -48.34070544162381],
    [-10.270559234502686, -48.33951887245102],
    [-10.272957110230378, -48.33945507840947],
    [-10.272932001678226, -48.338880932035536],
    [-10.270584343243263, -48.338855414418916],
    [-10.27053412576012, -48.33830678566161],
    [-10.272957110230378, -48.33828126804498],
    [-10.273007327328672, -48.337719880479355],
    [-10.270571788873221, -48.33768160405444],
    [-10.270483908269002, -48.33717125172205],
    [-10.272944555954558, -48.33704366363896],
    [-10.273446726598516, -48.33636744679855],
    [-10.276245238099587, -48.33647933620625],
    [-10.276232683954374, -48.3356117372412],
    [-10.276245238099587, -48.33647933620625],
    [-10.27627034638853, -48.33938834450085],
  ]
    ;

  const iconVazia = new L.Icon({
    iconUrl: "/lixeiraloading.svg",
    shadowUrl,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const iconCheia = new L.Icon({
    iconUrl: "/lixeirafull.svg",
    shadowUrl,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const realizarColeta = (lixeiraColetada: Lixeira) => {
    window.alert(`Coleta ${lixeiraColetada.id} realizada com sucesso!`);
    setLixeiras((prevLixeiras) =>
      prevLixeiras.map((lixeira) =>
        lixeira.id === lixeiraColetada.id ? { ...lixeira, estaCheia: false } : lixeira
      )
    );
  };

  const definirColeta = () => {
    const tiposSelecionados = Object.entries(tiposColeta)
      .filter(([_, selecionado]) => selecionado)
      .map(([tipo]) => tipo)
      .join(", ");

    if (!tiposSelecionados) {
      window.alert("Por favor, selecione pelo menos um tipo de coleta.");
      return;
    }

    window.alert(
      `Coleta agendada para ${date.toLocaleDateString()} com os tipos: ${tiposSelecionados}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Mapa à Esquerda */}
      <div style={{ flex: 2, marginRight: "10px" }}>
        <MapContainer
          center={initialPosition || rota[0]}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
          ref={mapRef}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {lixeiras.map((lixeira) => (
            <Marker
              key={lixeira.id}
              position={lixeira.posicao}
              icon={lixeira.estaCheia ? iconCheia : iconVazia}
            >
              <Popup>
                <strong>{lixeira.nome}</strong>
                <br />
                <button onClick={() => realizarColeta(lixeira)}>Realizar coleta</button>
                <br />
                Status: {lixeira.estaCheia ? "Cheia" : "Vazia"}
              </Popup>
            </Marker>
          ))}
          <Polyline
            positions={rota}
            color="blue"
            weight={4}
            opacity={0.7}
          />
        </MapContainer>
      </div>

      {/* Painel à Direita */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#006400",
          padding: "20px",
          overflowY: "auto",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2>Agendar Coleta</h2>
        <Calendar onChange={setDate} value={date} />
        <div style={{ marginTop: "20px" }}>
          <h3>Tipos de Coleta:</h3>
          <label>
            <input
              type="checkbox"
              checked={tiposColeta.reciclavel}
              onChange={() =>
                setTiposColeta((prev) => ({
                  ...prev,
                  reciclavel: !prev.reciclavel,
                }))
              }
            />
            Reciclável
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={tiposColeta.eletronica}
              onChange={() =>
                setTiposColeta((prev) => ({
                  ...prev,
                  eletronica: !prev.eletronica,
                }))
              }
            />
            Eletrônica
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={tiposColeta.organica}
              onChange={() =>
                setTiposColeta((prev) => ({
                  ...prev,
                  organica: !prev.organica,
                }))
              }
            />
            Orgânica
          </label>
        </div>
        <button
          onClick={definirColeta}
          style={{
            marginTop: "20px",
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Definir Data de Coleta
        </button>
      </div>
    </div>
  );
};

export default MapaLeaflet;
