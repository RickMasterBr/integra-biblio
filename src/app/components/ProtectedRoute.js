"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // 🔁 Se o usuário estiver deslogado, envia para login
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return <>{children}</>;
}
