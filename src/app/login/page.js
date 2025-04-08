"use client";

import { useState } from "react";
import { auth, db } from "/src/firebase.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login com e-mail/senha realizado!");
      setErro("");
    } catch (err) {
      console.error("Erro no login:", err.message);
      setErro("E-mail ou senha inválidos.");
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Salvar no Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nome: user.displayName,
        email: user.email,
        foto: user.photoURL,
        uid: user.uid,
      });

      console.log("Login com Google e usuário salvo!");
      setErro("");
    } catch (err) {
      console.error("Erro no login com Google:", err.message);
      setErro("Erro ao autenticar com Google.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Entrar
        </h1>

        {erro && (
          <p className="text-red-500 text-sm mb-4 text-center">{erro}</p>
        )}

        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-950 text-black"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-950 text-black"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Entrar
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-2">ou</p>
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white py-3 w-full rounded-xl hover:bg-red-600 transition"
          >
            Entrar com Google
          </button>
        </div>
      </div>
    </div>
  );
}
