'use client'
import MapaLeaflet from "../components/mapa"

export default function MapaPage() {
  return (
    <div className="flex flex-col items-center p-6 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center md:mb-6 text-verde_escuro">Rota do Lixo</h1>
      <div className="w-full max-w-4xl">
        <MapaLeaflet initialPosition={[-23.55052, -46.633308]} />
      </div>
    </div>
  )
}
