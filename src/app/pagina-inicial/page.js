import ProtectedRoute from "../components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="p-4 text-white">Página Inicial</div>;
    </ProtectedRoute>
  );
}
