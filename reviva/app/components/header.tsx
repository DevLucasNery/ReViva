import Link from "next/link";

export default function Header() {
    return (
        <header className="flex p-8 text-2xl bold bg-verde_escuro">
            <div>
                <Link href="/">ReViva</Link>
            </div>
        </header>
    )
}