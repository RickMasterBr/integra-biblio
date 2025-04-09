"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "/src/firebase.js"; // ajuste o caminho conforme seu projeto
import Link from "next/link";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Email de redefinição enviado!");
    } catch (error) {
      setMessage("Erro ao enviar email: " + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 relative">
      {/* Botão de voltar */}
      <Link
        href="/login"
        className="absolute top-4 left-4 text-blue-400 hover:underline"
      >
        Voltar para login
      </Link>

      <form
        onSubmit={handleReset}
        className="flex flex-col gap-4 w-80 bg-white p-6 rounded-2xl shadow-md"
      >
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Redefinir Senha
        </h1>
        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 border rounded-xl placeholder-gray-700 text-black outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Enviar email de redefinição
        </button>
        {message && (
          <p className="text-sm text-center mt-2 text-gray-700">{message}</p>
        )}
      </form>
    </div>
  );
}
