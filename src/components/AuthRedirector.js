"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default function AuthRedirector() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isAuthPage = pathname === "/login" || pathname === "/signup";

      if (user && isAuthPage) {
        router.push("/pagina-inicial"); // Redireciona para a página inicial se o usuário estiver logado
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  return null;
}
