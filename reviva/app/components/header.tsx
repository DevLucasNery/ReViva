import Link from "next/link";
import IconeAnimado from "./iconeAnimado";

export default function Header() {
    return (
        <header className="flex p-8 text-2xl bold shadow-2xl bg-violeta">
            <div className="flex items-center gap-2">
                <Link href="/">AllVoices</Link>
                <IconeAnimado></IconeAnimado>
            </div>
        </header>
    )
}