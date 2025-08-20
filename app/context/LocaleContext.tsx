"use client";

import { createContext, useEffect, useState } from "react";

interface LocaleContextType {
  localeValue: "id" | "en";
  toggleLocale: () => void;
}

export const LocaleContext = createContext<LocaleContextType>({
  localeValue: "id",
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [localeValue, setLocaleValue] = useState<"id" | "en">("id");

  const toggleLocale = () => setLocaleValue(localeValue === "id" ? "en" : "id");

  useEffect(() => {
    const storedLocale = localStorage.getItem("locale");
    if (storedLocale === "id" || storedLocale === "en") {
      setLocaleValue(storedLocale);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", localeValue);
  }, [localeValue]);

  return (
    <LocaleContext value={{ localeValue, toggleLocale }}>
      {children}
    </LocaleContext>
  );
}
