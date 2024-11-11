export interface VideoProps {
    titulo: string;
    descricao: string;
    youtubeId: string;
    onSelect: () => void;
    isSelected?: boolean;
}

export default function Video({ titulo,descricao,youtubeId,onSelect,isSelected }: VideoProps) {
    const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
    return (
        <div 
            className={`border rounded-lg p-4 cursor-pointer hover:bg-verde_escuro hover:text-branco transition ${isSelected ? 'bg-verde_escuro text-branco' : ''}`}
            onClick={onSelect}
        >
            <img src={thumbnailUrl} alt={`Thumbnail de ${titulo}`} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-semibold mb-2">{titulo}</h3>
            <p className="text-lg">{descricao}</p>
        </div>
    );
}
