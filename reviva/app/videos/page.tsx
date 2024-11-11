import Footer from "../components/footer";

export default function Videos() {
    return (
        <main className="text-white flex flex-col bg-gray-50 min-h-screen">
            <section className="flex flex-col bg-green-100 text-gray-800 flex-grow p-8 md:px-16 lg:px-24 justify-center items-center">
                <h1 className="text-3xl font-semibold mb-4 text-center md:mb-6 text-verde_escuro">
                    Aprenda mais sobre como separar seus resíduos para o descarte
                </h1>
                <p className="text-lg mb-10 text-center max-w-2xl">
                    A reciclagem é fundamental para preservar o meio ambiente. Assista aos vídeos abaixo e descubra
                    as melhores práticas para separar seus resíduos corretamente!
                </p>

                <span className="text-3xl font-semibold mb-4 text-verde_escuro">Vídeo de introdução</span>

                <div className="flex bg-white w-full md:w-3/4 lg:w-1/2 h-[25rem] justify-center items-center shadow-xl rounded-lg mb-8 transition-all duration-300 hover:shadow-2xl">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/ITur0JNJZos"
                        title="Vídeo de introdução"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                    ></iframe>
                </div>

                <span className="text-3xl font-semibold mt-4 mb-6 text-verde_escuro">Veja mais vídeos</span>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    <iframe
                        width="100%"
                        height="calc(100% * 16 / 9)"
                        src={`https://www.youtube.com/embed/p5eJczc03Vs`}
                        title="Vídeo mais recente"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="flex flex-grow rounded-lg aspect-[9/16]"
                    ></iframe>

                    <iframe
                        width="100%"
                        height="calc(100% * 16 / 9)"
                        src={`https://www.youtube.com/embed/aKzNgqD5xoY`}
                        title="Vídeo mais recente"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="flex flex-grow rounded-lg aspect-[9/16]"
                    ></iframe>

                    <iframe
                        width="100%"
                        height="calc(100% * 16 / 9)"
                        src={`https://www.youtube.com/embed/MmR6wY2oyJ4`}
                        title="Vídeo mais recente"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="flex flex-grow rounded-lg aspect-[9/16]"
                    ></iframe>
                </div>
            </section>
        </main>
    )
}
