import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-[#1d1d1d]">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logoProv.png"
            alt="Logo Integra Biblio"
            className="h-10 w-auto"
          />
        </div>

        {/* Navegação */}
        <nav className="flex space-x-4">
          <a
            href="/pagina-inicial"
            className="text-white border border-[#763BD7] rounded px-4 py-2 hover:bg-[#763BD7] hover:text-white transition"
          >
            Página Inicial
          </a>
          <a
            href="/sobre"
            className="text-white border border-[#763BD7] rounded px-4 py-2 hover:bg-[#763BD7] hover:text-white transition"
          >
            Sobre
          </a>
          <a
            href="/contatos"
            className="text-white border border-[#763BD7] rounded px-4 py-2 hover:bg-[#763BD7] hover:text-white transition"
          >
            Contatos
          </a>
          <a
            href="/membros"
            className="text-white border border-[#763BD7] rounded px-4 py-2 hover:bg-[#763BD7] hover:text-white transition"
          >
            Membros
          </a>
        </nav>
      </header>

      <main className="flex-1 p-4 bg-white">
        <p className="text-black">Conteúdo da página inicial aqui.</p>
      </main>

      <footer className="p-4 bg-light-gray border-t text-center text-sm text-gray-600">
        © 2025 Integra Biblio. Todos os direitos reservados.
      </footer>
    </div>
  );
}
