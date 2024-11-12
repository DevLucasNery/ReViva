'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png';
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

export interface Lixeira {
  id: string
  nome: string
  posicao: [number, number]
  estaCheia: boolean
}

interface MapaLeafletProps {
  initialPosition?: [number, number]
  setLixeiras: Dispatch<SetStateAction<Lixeira[]>>
  lixeiras: Lixeira[]
}

const MapaLeaflet: React.FC<MapaLeafletProps> = ({ initialPosition, lixeiras, setLixeiras }) => {
  const [position, setPosition] = useState<[number, number] | null>(null)
  const mapRef = useRef<L.Map | null>(null)

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
      }
    };
  }, []);

  useEffect(() => {
    let isMounted = true
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          if (isMounted) {
            const { latitude, longitude } = pos.coords
            setPosition([latitude, longitude])
          }
        },
        () => {
          return ('Não foi possível obter a localização.')
        }
      );
    }

    return () => {
      isMounted = false
    };
  }, [])

  useEffect(() => {
    if (mapRef.current && position) {
      mapRef.current.setView(position, 13)
    }
  }, [position]);


  const iconVazia = new L.Icon({
    iconUrl: '/lixeiraloading.svg',
    shadowUrl,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const iconCheia = new L.Icon({
    iconUrl: '/lixeirafull.svg',
    shadowUrl,
    iconSize: [41, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  })

  const realizarColeta = (lixeiraColetada:Lixeira) => {
    window.alert(`Coleta ${lixeiraColetada.id} realizada com sucesso!`)
    setLixeiras((prevLixeiras) =>
      prevLixeiras.map((lixeira) =>
        lixeira.id === lixeiraColetada.id ? { ...lixeira, estaCheia: false } : lixeira
      )
    );
    console.log(lixeiras)
  }
  return (
    <MapContainer
      center={initialPosition || [0, 0]}
      zoom={13}
      style={{ height: '75vh', width: '100%' }}
      ref={mapRef}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <Marker position={position}>
          <Popup>Você está aqui</Popup>
        </Marker>
      )}
      {lixeiras.map((lixeira) => (
        <Marker
          key={lixeira.id}
          position={lixeira.posicao}
          icon={lixeira.estaCheia ? iconCheia : iconVazia}
        >
          <Popup>
            <strong>{lixeira.nome}</strong><br />
            <button onClick={() => realizarColeta(lixeira)}>Realizar coleta</button><br />
            Status: {lixeira.estaCheia ? 'Cheia' : 'Vazia'}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapaLeaflet
