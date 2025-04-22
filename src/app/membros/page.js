// app/sobre/page.js
import ProtectedRoute from "../components/ProtectedRoute";

export default function MembrosPage() {
  return (
    <ProtectedRoute>
      <div className="p-4 text-white">Página Membros</div>;
    </ProtectedRoute>
  );
}
