'use client'
import { useState } from "react"
import MapaLeaflet, { Lixeira } from "../components/mapa"

export default function MapaPage() {
  const [listaLixeiras, setListaLixeiras] = useState<Lixeira[]>([
    {
      id: '1',
      nome: 'Lixeira Central',
      posicao: [-23.55052, -46.633308],
      estaCheia: false,
    },
    {
      id: '2',
      nome: 'Lixeira do Parque',
      posicao: [-23.551, -46.634],
      estaCheia: true,
    },
  ])
  return (
    <div className="flex flex-col items-center p-6 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center md:mb-6 text-verde_escuro">Rota do Lixo</h1>
      <div className="w-full max-w-4xl">
        <MapaLeaflet initialPosition={[-23.55052, -46.633308]} lixeiras={listaLixeiras} setLixeiras={setListaLixeiras} />
      </div>
    </div>
  )
}
