"use client";

import { useContext } from "react";
import { usePathname } from "next/navigation";
import { LocaleContext } from "../context/LocaleContext";

const translations: Record<string, { id: string; en: string }> = {
  "/": { id: "Perkenalan", en: "Introduction" },
  "/skills": { id: "Keahlian", en: "Skills" },
  "/experiences": { id: "Pengalaman", en: "Experiences" },
  "/certificates": { id: "Sertifikat", en: "Certificates" },
};

export default function Title() {
  const [localeValue] = useContext(LocaleContext);
  const pathname = usePathname();

  const translation = translations[pathname];

  return (
    <p className="mb-10 font-bold text-3xl text-center underline underline-offset-8">
      {localeValue === "en" ? translation.en : translation.id}
    </p>
  );
}
