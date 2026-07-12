"use client";

import { usePathname } from "next/navigation";
import { PageLoader } from "./PageLoader";

export function ConditionalPageLoader() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return <PageLoader />;
}
