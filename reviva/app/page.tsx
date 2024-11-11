import Link from "next/link";
import Footer from "./components/footer";
import Funcionalidades from "./components/funcionalidades";
import Header from "./components/header";

export default function Home() {
  const funcionalidades = [
    { href: '/mapa', nome: 'Rota do lixo', icone: '🗺' },
    { href: '/funcionalidade2', nome: 'Calendário de coleta', icone: '📅' },
    { href: '/funcionalidade3', nome: 'Controle de descarte', icone: '🚯' },
  ]

  return (
    <main className="text-branco flex flex-col bg-branco min-h-screen min-w-screen">
      <Header></Header>
      <section className="flex flex-grow" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className="flex w-1/2 p-8 bg-verde_claro">
          <div className="flex text-verde_escuro gap-4 font-bold flex-grow flex-col justify-center">
            <span className="text-[3rem]">Repense🤔</span>
            <span className="text-[3rem]">Recicle ♻</span>
            <span className="text-[3rem]">Reuse 🔃</span>
          </div>
        </div>
        <div className="flex w-1/2 bg-[url('/imglanding.jpg')] bg-cover">
        </div>
      </section>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#funcionalidades">
          <button className="animate-bounce bg-verde_escuro text-white p-4 rounded-full">
            ↓
          </button>
        </a>
      </div>

      <section id="funcionalidades" className="h-screen flex flex-col gap-10 justify-between pt-12 items-center bg-branco">
        <h1 className="font-bold text-3xl text-verde_escuro">Confira nossas funcionalidades</h1>
        <Funcionalidades listaFunc={funcionalidades}></Funcionalidades>
        <h1 className="font-bold text-3xl text-verde_escuro">Nosso vídeo mais recente</h1>
        <section className="flex p-4 flex-grow">
          <div className="flex flex-col items-center gap-6 w-1/2">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/ITur0JNJZos`}
              title={'Vídeo mais recente'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <div className="flex flex-col justify-between rounded bg-verde_claro gap-6 w-1/2 p-10">
            <h1 className="text-2xl text-verde_escuro ">Buscamos sempre pensar no verde, TODOS OS DIAS e o dia todo. Queremos verdificar o mundo e queimar as ideias ruins. Vem com a gente!</h1>
            <Link href={'/videos'} className="flex items-center justify-center bg-verde_escuro rounded-lg p-4">Confira todos os nossos vídeos</Link>
          </div>
        </section>

        <Footer></Footer>
      </section>
    </main>
  );
}
