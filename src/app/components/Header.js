"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Página Inicial", href: "/pagina-inicial" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contatos", href: "/contatos" },
    { name: "Membros", href: "/membros" },
  ];

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.clear(); // limpa qualquer estado local
      window.location.href = "/login"; // redireciona completamente
    } catch (err) {
      console.error("Erro ao sair:", err.message);
      alert("Erro ao sair. Tente novamente.");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#1d1d1d]">
      <div className="flex items-center">
        <Image
          src="/logoProv.png"
          alt="Logo Integra Biblio"
          width={40}
          height={40}
        />
      </div>
      <nav className="flex space-x-4">
        {navItems.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded border transition ${
              pathname === href
                ? "bg-[#763BD7] text-white"
                : "text-white border-[#763BD7] hover:bg-[#763BD7]"
            }`}
          >
            {name}
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="text-white border border-red-500 rounded px-4 py-2 hover:bg-red-500 transition"
        >
          Sair
        </button>
      </nav>
    </header>
  );
}
