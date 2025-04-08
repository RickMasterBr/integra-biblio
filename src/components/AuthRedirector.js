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
        router.push("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [pathname, router]);

  return null;
}
