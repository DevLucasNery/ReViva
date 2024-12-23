import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const fonte = Figtree({
  weight: ['400', '700'],
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "ReViva",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonte.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
