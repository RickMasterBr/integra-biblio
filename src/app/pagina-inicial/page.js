import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function PaginaInicial() {
  return (
    <ProtectedRoute>
      <div className="text-black">
        <h1 className="text-2xl font-bold">Página Inicial</h1>
        <p>Conteúdo visível apenas para usuários autenticados.</p>
      </div>
    </ProtectedRoute>
  );
}
