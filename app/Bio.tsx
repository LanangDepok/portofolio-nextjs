"use client";

import { useContext } from "react";
import { LocaleContext } from "./context/LocaleContext";

export default function Bio() {
  const [localeValue] = useContext(LocaleContext);

  return (
    <div className="text-justify">
      {localeValue === "id"
        ? "Saya adalah seorang Full Stack Web Developer (Frontend & Backend) berusia 22 tahun yang tinggal di Depok, dengan spesialisasi dalam pengembangan web modern. Berbekal pengalaman profesional lebih dari satu tahun serta latar belakang pendidikan di Teknik Informatika dari Politeknik Negeri Jakarta dan CCIT Universitas Indonesia, saya menguasai teknologi web modern, pemikiran kritis, inisiatif, pembelajaran cepat, pemecahan masalah, kerja tim, dan kepemimpinan. Saya berkomitmen untuk menciptakan perangkat lunak berkualitas tinggi dan memberikan kontribusi yang berarti dalam setiap proyek yang saya kerjakan."
        : "I am a 22 year old Full Stack Web Developer (Frontend & Backend) based in Depok, specializing in modern web development. With over one year of professional experience and an educational background in Informatics Engineering from Politeknik Negeri Jakarta and CCIT Universitas Indonesia, I have strong expertise in modern web technologies, critical thinking, initiative, fast learning, problem-solving, teamwork, and leadership. I am committed to delivering high-quality software and making meaningful contributions to every project I work on."}
    </div>
  );
}
