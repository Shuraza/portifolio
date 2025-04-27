import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel de Souza",
  description: "Criado Por Samuel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <title>Samuel de Souza</title>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`} // Adicionando a variável da fonte Roboto aqui
      >
        {children}
      </body>
    </html>
  );
}
