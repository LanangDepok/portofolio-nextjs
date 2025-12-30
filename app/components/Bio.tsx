"use client";

import { useContext } from "react";
import { LocaleContext } from "@/app/context/LocaleContext";

export default function Bio() {
  const [localeValue] = useContext(LocaleContext);

  return (
    <div className="text-justify">
      {localeValue === "id"
        ? "Full Stack Web Developer & DevOps Support di PLN Icon Plus. Berusia 22 tahun dan berbasis di Depok, saya memiliki spesialisasi dalam membangun aplikasi web modern dengan dukungan infrastruktur yang solid. Berbekal pendidikan dari PNJ dan CCIT UI serta pengalaman industri, saya fokus pada penciptaan solusi digital yang efisien, berkualitas tinggi, dan siap menghadapi pertumbuhan beban kerja."
        : "Full Stack Web Developer & DevOps Support at PLN Icon Plus. Based in Depok and 22 years old, I specialize in developing modern web applications with a robust infrastructure foundation. Leveraging my education from PNJ and CCIT UI and my professional experience, I am dedicated to creating efficient, high-quality digital solutions capable of scaling with demand."
        }
    </div>
  );
}
