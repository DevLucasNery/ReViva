
export default function Home() {
  return (
    <main className="text-branco flex flex-col bg-branco min-h-screen min-w-screen">
      <header className="flex p-8 text-2xl bold bg-verde_escuro">
        <div>
          <span>Reviva</span>
        </div>
      </header>
      <section className="flex text-black flex-grow p-8">
        <div className="flex w-1/2">
          <div className="flex flex-grow flex-col justify-center">
            <h1 className="text-[5rem]">ReViva</h1>
            <span>Repense, Recicle, Reuse</span>
          </div>
        </div>
        <div className="flex w-1/2 bg-[url('/imglanding.jpg')] bg-cover">
        <img ></img>
        </div>
      </section>
    </main>
  );
}

