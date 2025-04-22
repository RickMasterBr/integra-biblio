"use client";

import { useState } from "react";
import { auth, db } from "/src/firebase.js";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Link from "next/link"; // Importa o Link do Next.js

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: name,
        email: user.email,
        uid: user.uid,
      });

      console.log("Usuário criado com sucesso!");
      setErro("");

      // ✅ Redirecionar após cadastro
      setTimeout(() => {
        window.location.href = "/pagina-inicial"; // ou "/pagina-inicial" se quiser logar direto
      }, 1000);
    } catch (err) {
      console.error("Erro ao criar conta:", err.message);
      setErro("Erro ao criar conta. Verifique os dados.");
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "usuarios", user.uid), {
        nome: user.displayName,
        email: user.email,
        foto: user.photoURL,
        uid: user.uid,
      });

      console.log("Conta criada com Google e usuário salvo!");
      setErro("");

      // ✅ Redirecionar para a home após criação com Google
      setTimeout(() => {
        window.location.href = "/pagina-inicial";
      }, 1000);
    } catch (err) {
      console.error("Erro com Google:", err.message);
      setErro("Erro ao criar conta com Google.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Criar Conta
        </h1>

        {erro && (
          <p className="text-red-500 text-sm mb-4 text-center">{erro}</p>
        )}

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-950 text-black"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-950 text-black"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-950 text-black"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
          >
            Criar Conta
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700 mb-2">ou</p>
          <button
            onClick={handleGoogleSignUp}
            className="bg-red-500 text-white py-3 w-full rounded-xl hover:bg-red-600 transition"
          >
            Criar com Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-700">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
