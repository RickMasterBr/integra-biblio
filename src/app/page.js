"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "/src/firebase.js";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se estiver logado, manda para dashboard
        router.push("/pagina-inicial");
      } else {
        // Se não estiver logado, manda para login
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  return null; // Enquanto redireciona, não renderiza nada
}
