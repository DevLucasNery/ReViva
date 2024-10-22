export default function Videos() {
    return (
        <main className="text-branco flex flex-col bg-branco min-h-screen min-w-screen">
            <header className="flex p-8 text-2xl bold bg-verde_escuro">
                <div>
                    <span>Reviva</span>
                </div>
            </header>

            <section className="flex flex-col bg-verde_claro text-black flex-grow p-8 justify-center items-center">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Aprenda mais sobre como separar seus resíduos para o descarte
                </h1>
                <p className="text-lg mb-8 text-center">
                    A reciclagem é fundamental para preservar o meio ambiente. Assista aos vídeos abaixo e descubra
                    as melhores práticas para separar seus resíduos corretamente!
                </p>

                <span className="text-xl font-semibold">
                    COmo rebolar lentinho pros crias
                </span>

                <div className="flex bg-branco w-1/2 h-[25rem] flex-grow justify-center items-center shadow-lg rounded-lg mb-8">
                    <div className="flex w-[10rem] h-[10rem] rounded-full bg-[url('/play-button.png')] bg-cover bg-center cursor-pointer"></div>
                </div>


                <span className="text-xl font-semibold">
                    Veja mais vídeos
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <div className="w-full h-[10rem] bg-[url('/video-thumbnail1.jpg')] bg-cover bg-center mb-4"></div>
                        <h2 className="text-xl font-semibold">Como separar plástico e vidro</h2>
                        <p className="text-gray-700 text-sm mt-2">
                            Aprenda a diferença e a importância de separar esses materiais para a reciclagem.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <div className="w-full h-[10rem] bg-[url('/video-thumbnail2.jpg')] bg-cover bg-center mb-4"></div>
                        <h2 className="text-xl font-semibold">O que fazer com lixo orgânico?</h2>
                        <p className="text-gray-700 text-sm mt-2">
                            Saiba como destinar corretamente resíduos orgânicos e contribuir com a compostagem.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <div className="w-full h-[10rem] bg-[url('/video-thumbnail3.jpg')] bg-cover bg-center mb-4"></div>
                        <h2 className="text-xl font-semibold">Reciclagem de eletrônicos</h2>
                        <p className="text-gray-700 text-sm mt-2">
                            Entenda como descartar eletrônicos e evitar contaminação com componentes perigosos.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="bg-verde_escuro text-white p-8 flex justify-center">
                <p>&copy; 2024 Reviva - Todos os direitos reservados</p>
            </footer>
        </main>
    )
}