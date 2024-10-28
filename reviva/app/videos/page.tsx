'use client'
import { useState } from "react";
import Video from "../components/video";

interface Video {
    titulo: string
    descricao: string
    youtubeId: string
}

const listaVideos: Video[] = [
    { titulo: 'Como reciclar', descricao: 'Aprenda a reciclar do zero', youtubeId: '3AfaTM8fB_E' },
    { titulo: 'Reciclagem: mito ou realidade?', descricao: 'Desvende verdades sobre reciclagem com Thomas Turbando', youtubeId: 'OuG7WKSrwCQ' },
    { titulo: 'A vida sem lixo', descricao: 'Vida ≠ Lixo', youtubeId: 'vm49-iA7Y5Y' }
];

export default function Videos() {
    const [videoSelecionado, setVideoSelecionado] = useState<Video | null>(null);
    return (
        <section className="flex flex-col bg-branco text-verde_escuro flex-grow p-8 justify-center items-center">
            <h1 className="text-4xl font-semibold mb-6 text-center">
                Aprenda mais sobre como separar seus resíduos para o descarte
            </h1>
            <p className="text-xl mb-8 text-center">
                A reciclagem é fundamental para preservar o meio ambiente. Assista aos vídeos abaixo e descubra
                as melhores práticas para separar seus resíduos corretamente!
            </p>

            <div className="flex bg-branco w-full max-w-4xl h-[25rem] flex-grow justify-center items-center shadow-lg rounded-lg mb-8">
                {videoSelecionado ? (
                    <div className="w-full h-full">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${videoSelecionado.youtubeId}`} 
                            title={videoSelecionado.titulo} 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                ) : (
                    <div 
                        className="flex flex-col justify-center items-center cursor-pointer"
                        onClick={() => {
                            if (listaVideos.length > 0) {
                                setVideoSelecionado(listaVideos[0]);
                            }
                        }}
                        title="Clique para selecionar um vídeo"
                    >
                        <div 
                            className="w-24 h-24 mb-4 rounded-full bg-[url('/play-button.png')] bg-cover bg-center"
                        ></div>
                        <span className="text-lg font-semibold">Clique para reproduzir um vídeo</span>
                    </div>
                )}
            </div>

            <span className="text-2xl font-semibold mb-4">
                Veja mais vídeos
            </span>

            <div className="grid grid-cols-1 p-8 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {listaVideos.map(video => (
                    <Video 
                        key={video.youtubeId} 
                        titulo={video.titulo} 
                        descricao={video.descricao} 
                        youtubeId={video.youtubeId}
                        onSelect={() => setVideoSelecionado(video)} 
                        isSelected={videoSelecionado?.youtubeId === video.youtubeId}
                    />
                ))}
            </div>
        </section>
    )
}
