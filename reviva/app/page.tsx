import Funcionalidades from "./components/funcionalidades";
import Header from "./components/header";

export default function Home() {
  const funcionalidades = [
    { href: '/funcionalidade1', nome: 'Funcionalidade 1' },
    { href: '/funcionalidade2', nome: 'Funcionalidade 2' },
    { href: '/funcionalidade3', nome: 'Funcionalidade 3' },
    { href: '/funcionalidade4', nome: 'Funcionalidade 4' },
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

      <section id="funcionalidades" className="h-screen flex flex-col justify-between pt-12 items-center bg-branco">
        <h1 className="font-bold text-3xl text-verde_escuro">Confira nossas funcionalidades</h1>
        <Funcionalidades listaFunc={funcionalidades}></Funcionalidades>
        <footer className="p-8 flex w-full items-center max-h-36 justify-between flex-grow bg-verde_escuro">
          <span>ReViva - 2024</span>
          <span>♻♻♻♻♻♻♻</span>
          <div className="flex flex-col">
            <span>Lucas Franco Castro</span>
            <span>Levi Medeiros Souza</span>
            <span>Lucas Nery</span>
          </div>
        </footer>
      </section>
    </main>
  );
}
