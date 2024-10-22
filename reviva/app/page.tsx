'use client'
export default function Home() {
  return (
    <main className="text-branco flex flex-col bg-branco min-h-screen min-w-screen">
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      <header className="flex p-8 text-2xl bold bg-[#1E4808]">
        <div>
          <span>Reviva</span>
        </div>
      </header>

      <section className="flex flex-grow" style={{ height: 'calc(100vh - 6rem)' }}>
        <div className="flex w-1/2 p-8 bg-[#D1E8D3]">
          <div className="flex text-[#1E4808] gap-4 font-bold flex-grow flex-col justify-center">
            <span className="text-[3rem]">Repense 🤔</span>
            <span className="text-[3rem]">Recicle ♻</span>
            <span className="text-[3rem]">Reuse 🔃</span>
          </div>
        </div>
        <div className="flex w-1/2 bg-[url('/imglanding.jpg')] bg-cover">
        </div>
      </section>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#nextSection">
          <button className="animate-bounce bg-[#1E4808] text-white p-4 rounded-full">
            ↓
          </button>
        </a>
      </div>

      <section id="nextSection" className="h-screen flex flex-col justify-evenly pt-12 items-center bg-branco">
        <h1 className="font-bold text-3xl text-[#1E4808]">Confira nossas funcionalidades</h1>
        <div className="flex gap-4 pt-12 ">
          <div className="flex-items-col text-center bg-[#1E4808] p-4 w-[200px] rounded h-[300px]">
            <span>Funcionalidade 1</span>
          </div>
          <div className="flex-items-col text-center bg-[#1E4808] p-4 w-[200px] rounded h-[300px]">
            <span>Funcionalidade 1</span>
          </div>
          <div className="flex-items-col text-center bg-[#1E4808] p-4 w-[200px] rounded h-[300px]">
            <span>Funcionalidade 1</span>
          </div>
          <div className="flex-items-col text-center bg-[#1E4808] p-4 w-[200px] rounded h-[300px]">
            <span>Funcionalidade 1</span>
          </div>
        </div>
        <footer className="p-8 flex w-full items-center justify-between flex-grow mt-24 bg-[#1E4808]">
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
