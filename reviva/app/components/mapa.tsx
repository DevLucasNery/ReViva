import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect, useState } from 'react'

const iconRetinaUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png'
const iconUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'
const shadowUrl = 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
})


const SetViewOnLocation = ({ position }: { position: [number, number] }) => {
  const map = useMap()
  useEffect(() => {
    map.setView(position, 13) 
  }, [map, position])
  return null
}

interface MapaLeafletProps {
  initialPosition?: [number, number]
}

const MapaLeaflet: React.FC<MapaLeafletProps> = ({ initialPosition = [-23.55052, -46.633308] }) => {
  const [position, setPosition] = useState<[number, number] | null>(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords
          setPosition([latitude, longitude])
        },
        () => {
          console.error("Não foi possível obter a localização.")
        }
      )
    }
  }, [])

  return (
    <MapContainer center={initialPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {position && (
        <>
          <Marker position={position}>
            <Popup>Você está aqui</Popup>
          </Marker>
          <SetViewOnLocation position={position} />
        </>
      )}
    </MapContainer>
  )
}

export default MapaLeaflet
