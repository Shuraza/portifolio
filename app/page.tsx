"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    document.title = "Samuel de Souza | Desenvolvedor";
  }, []);

  return (

    <main className="min-h-screen text-white font-roboto" style={{ backgroundColor: '#0a0a0a' }}>

      <header className="fixed top-0 w-full bg-[#0f0f0f] text-white shadow z-50">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
          <a href="#inicio" className="flex items-center gap-2 font-bold text-xl">
            <img src="/logo.png" alt="Logo Samuel de Souza" className="w-8 h-8" />
          </a>
          <ul className="flex gap-6 text-sm md:text-base">
            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
            <li><a href="#projetos" className="hover:underline">Projetos</a></li>
            <li><a href="#links" className="hover:underline">Links</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="inicio" className="flex flex-col items-center justify-center h-screen text-center px-6">

        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Samuel de Souza
        </motion.h1>


        <motion.p
          className="text-lg md:text-xl text-neutral-300 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Engenheiro de Software apaixonado por tecnologia, desenvolvimento web, mobile e software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
        </motion.div>

      </section>

      {/* Sobre Mim */}
      <section id="sobre" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10 text-center md:text-left">Sobre mim</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3 text-neutral-300 text-lg">
            <p>
              Sou formado em Engenharia de Software e desenvolvi diversos projetos nas áreas de backend, frontend, mobile e dados.
              Gosto de criar soluções completas e intuitivas, e estou sempre aprendendo e me atualizando com novas tecnologias.
            </p>
          </div>
          <motion.img
            src="/perfil.jpg"
            alt="Foto de Samuel de Souza"
            className="w-40 h-40 box-full object-cover border-3 border-white shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>
      </section>


      {/* Links Importantes */}
      <section id="links" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Links Importantes</h2>
        <p className="text-neutral-400">
          Em breve vou adcionar links imoprantes.
        </p>
      </section>

      {/* Projetos*/}
      <section id="projetos" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Projetos</h2>
        <p className="text-neutral-400">Em breve vou adicionar aqui alguns dos projetos que desenvolvi.</p>
      </section>

      {/* Contato */}
      <section id="contato" className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Quer Falar Comigo?</h2>
        <p className="text-neutral-300 mb-6">Me envie um e-mail para: <a href="mailto:samueldesouza200512@gmail.com" className="underline text-blue-400">samueldesouza200512@gmail.com</a></p>
        <p className="text-neutral-300 mb-6">Me envie uma mensagem: <a href="https://wa.me/5547996607262" className="underline text-blue-400">Whatsapp</a></p>
      </section>
    </main>
  );
}
