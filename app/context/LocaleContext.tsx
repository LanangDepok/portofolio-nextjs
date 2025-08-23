"use client";

import { createContext, useEffect, useState } from "react";

type LocaleContextType = [string, () => void];

export const LocaleContext = createContext<LocaleContextType>(["id", () => {}]);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<string>("id");

  const toggleLocale = () => {
    const newLocale = locale === "id" ? "en" : "id";
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale);
    }
    setLocale(newLocale);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLocale = localStorage.getItem("locale");
      if (storedLocale) {
        setLocale(storedLocale);
      }
    }
  }, []);

  return (
    <LocaleContext value={[locale, toggleLocale]}>{children}</LocaleContext>
  );
}
