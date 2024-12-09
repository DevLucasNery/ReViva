'use client'
import { useState } from "react"
import MapaLeaflet, { Lixeira } from "../components/mapa"

export default function MapaPage() {
  const [listaLixeiras, setListaLixeiras] = useState<Lixeira[]>([
    {
      id: '1',
      nome: 'Lixeira da Faculdade',
      posicao: [-10.278046264472238, -48.3348180196644],
      estaCheia: false,
    },
    {
      id: '2',
      nome: 'Lixeira da Faculdade',
      posicao: [-10.277595491336237, -48.33484157573972],
      estaCheia: true,
    },
    {
      id: '3',
      nome: 'Lixeira da Faculdade',
      posicao: [-10.183641081361907, -48.3089475762754],
      estaCheia: true,
    },
    {
      id: '4',
      nome: 'Lixeira da Faculdade',
      posicao: [-10.278003499040953, -48.33385595783518],
      estaCheia: true,
    },
  ])
  return (
    <div className="flex flex-col items-center p-6 bg-green-100 min-h-screen">
      <h1 className="text-3xl font-semibold mb-4 text-center md:mb-6 text-verde_escuro">Rota do Lixo</h1>
      <h2 className="text-3xl font-semibold mb-4 text-center md:mb-6 text-verde_escuro">Rotas do caminhoes, Lixeiras e locais com Denuncias</h2>
   
      <div className="w-full max-w-4xl">
        <MapaLeaflet initialPosition={[-23.55052, -46.633308]} lixeiras={listaLixeiras} setLixeiras={setListaLixeiras} />
      </div>
    </div>
  )
}
