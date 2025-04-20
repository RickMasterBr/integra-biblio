// src/app/layout.js
import "./globals.css";
import HeaderWrapper from "./components/HeaderWrapper";

export const metadata = {
  title: "Integra Biblio",
  description: "Sistema de gerenciamento",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col min-h-screen bg-white text-black">
        <HeaderWrapper />
        <main className="flex-1">{children}</main>
        <footer className="p-4 bg-[#f5f5f5] border-t text-center text-sm text-gray-600">
          © 2025 Integra Biblio. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}
