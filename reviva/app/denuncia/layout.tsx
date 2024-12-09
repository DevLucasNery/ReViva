import { Metadata } from "next"
import Header from "../components/header"
import Footer from "../components/footer"

export const metadata: Metadata = {
    title: 'ReViva - Vídeos'
}

export default function VideosLayout({ children, }: { children: React.ReactNode }) {
    return (
        <main className="text-branco flex flex-col bg-branco min-h-screen min-w-screen">
            <Header></Header>
            {children}
            <Footer></Footer>
        </main>
    )
}