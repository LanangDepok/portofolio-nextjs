"use client";

import { createContext } from "react";

export const LocaleContext = createContext("Locale");

export function LocaleProvider({
  children,
  localeValue,
}: {
  children: React.ReactNode;
  localeValue: string;
}) {
  return <LocaleContext value={localeValue}>{children}</LocaleContext>;
}
