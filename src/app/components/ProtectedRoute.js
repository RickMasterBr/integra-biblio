"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      } else {
        setAuthChecked(true);
      }
    });

    return () => unsubscribe();
  }, [router]);

  // Só renderiza o conteúdo quando a verificação terminar
  if (!authChecked) return null;

  return <>{children}</>;
}
