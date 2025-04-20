// src/app/components/HeaderWrapper.js
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const publicRoutes = ["/login", "/signup", "/reset-password"];

  if (publicRoutes.includes(pathname)) return null;

  return <Header />;
}
