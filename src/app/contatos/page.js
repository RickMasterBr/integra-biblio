// app/sobre/page.js

import ProtectedRoute from "../components/ProtectedRoute";

export default function ContatosPage() {
  return (
    <ProtectedRoute>
      <div className="p-4 text-white">Página Contatos</div>;
    </ProtectedRoute>
  );
}
