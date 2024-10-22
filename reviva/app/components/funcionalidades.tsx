import Link from "next/link";

interface Funcionalidade {
    href: string;
    nome: string
}
export default function Funcionalidades({ listaFunc }: { listaFunc: Funcionalidade[] }) {
    return (
        <div className="flex gap-4 flex-wrap w-full justify-center">
            {listaFunc.map(funcionalidade => {
                return (
                    <Link key={funcionalidade.href} href={funcionalidade.href} className="flex-items-col text-center bg-verde_escuro p-4 w-[200px] rounded h-[300px]">
                        <span>{funcionalidade.nome}</span>
                    </Link>
                )
            })}

        </div>
    )
}