// app/sobre/page.js
import ProtectedRoute from "../components/ProtectedRoute";

export default function SobrePage() {
  return (
    <ProtectedRoute>
      <div className="p-4 text-white">Página Sobre</div>;
    </ProtectedRoute>
  );
}
