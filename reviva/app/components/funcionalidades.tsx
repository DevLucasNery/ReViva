import Link from "next/link";

interface Funcionalidade {
    href: string
    nome: string
    icone: string
}
export default function Funcionalidades({ listaFunc }: { listaFunc: Funcionalidade[] }) {
    return (
        <div className="flex gap-8 flex-wrap w-full justify-center">
            {listaFunc.map(funcionalidade => {
                return (
                    <a key={funcionalidade.href} href={funcionalidade.href} className="flex rounded gap-6 flex-col w-48 h-64 justify-center text-center bg-verde_escuro p-4 ">
                        <span className="text-8xl">{funcionalidade.icone}</span>
                        <span className="text-xl">{funcionalidade.nome}</span>
                    </a>
                )
            })}

        </div>
    )
}