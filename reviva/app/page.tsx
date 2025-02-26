'use client'
import Link from "next/link";
import Footer from "./components/footer";
import Funcionalidades from "./components/funcionalidades";
import Header from "./components/header";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const funcionalidades = [
    { href: '/mapa', nome: 'Rota do lixo', icone: '🗺' },
    { href: '/calendario', nome: 'Pontos de Coleta', icone: '♻️' },
    { href: '/denuncia', nome: 'Denuncias', icone: '🚯' },
    { href: '/beneficios', nome: 'FAQ e Bonus', icone: '❓' },
  ]

  return (
    <main className="text-branco flex flex-col bg-branco min-h-screen min-w-screen">
      <Header></Header>
      <section className="flex flex-grow" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className="flex w-1/2 p-8 bg-azul_claro bg-opacity-70">
          <div className="flex text-white gap-4 font-bold flex-grow flex-col justify-center">
            <span className="text-4xl text-shadow">
              <Typewriter
                words={['Se todas as vozes não são ouvidas, estamos realmente inovando?']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
              />
            </span>
          </div>

        </div>
        <div className="w-1/2 bg-[url(/bglgbt.jpg)] bg-cover">

        </div>
      </section>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#funcionalidades">
          <button className="animate-bounce bg-violeta text-white p-4 rounded-full">
            ↓
          </button>
        </a>
      </div>
      <section id="funcionalidades" className="h-screen flex flex-col items-center bg-gradient-to-b from-azul_claro to-[#C688F5]">
        <h1 className="font-bold text-4xl text-white text-center mt-8 mb-8">Corporativismo Inclusivo</h1>

        <section className="flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto rounded-lg bg-white shadow-xl">

          <div className="flex flex-col justify-between w-full md:w-1/2 text-gray-800">
            <p className="text-lg leading-relaxed mb-6">
              Vivemos em um mundo diverso, cheio de histórias, ideias e sonhos. Acreditamos que cada voz merece ser ouvida, que cada perspectiva tem valor e que juntos podemos construir algo maior.
              Nosso espaço é para todos. Aqui, não há barreiras para se expressar, aprender e evoluir. Queremos que cada palavra seja um passo para um mundo mais inclusivo, onde a empatia e o respeito guiem nossas conexões.
              Seja qual for a sua voz, ela tem um lugar aqui.
            </p>

            <Link
              href="/videos"
              className="inline-block text-center bg-violeta text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-700"
            >
              🎥 Confira
            </Link>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ITur0JNJZos"
                title="Vídeo mais recente"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </section>

      <Footer></Footer>
    </section>
    </main >
  );
}
