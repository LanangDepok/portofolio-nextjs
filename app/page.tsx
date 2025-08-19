"use client";

import Image from "next/image";
import photoProfile from "../public/profile.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <p className="mb-10 font-bold text-3xl text-center underline">
        Perkenalan
      </p>
      <div className="flex lg:flex-row-reverse flex-col gap-10 lg:gap-36">
        <div>
          <div className="relative mx-auto rounded-xl w-72 h-96 overflow-hidden">
            <Image
              src={photoProfile}
              fill
              alt="photo-profile"
              className="object-bottom object-cover"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div>
            <p className="font-bold text-2xl">Bagas Rizkiyanto</p>
            <p className="font-semibold text-lg">Full Stack Web Developer</p>
          </div>
          <div className="text-justify">
            Saya adalah seorang Full Stack Web Developer (Frontend & Backend)
            berusia 22 tahun yang tinggal di Depok, dengan spesialisasi dalam
            pengembangan web modern. Berbekal pengalaman profesional lebih dari
            satu tahun serta latar belakang pendidikan di Teknik Informatika
            dari Politeknik Negeri Jakarta dan CCIT Universitas Indonesia, saya
            menguasai teknologi web modern, pemikiran kritis, inisiatif,
            pembelajaran cepat, pemecahan masalah, kerja tim, dan kepemimpinan.
            Saya berkomitmen untuk menciptakan perangkat lunak berkualitas
            tinggi dan memberikan kontribusi yang berarti dalam setiap proyek
            yang saya kerjakan.
          </div>
          <div className="flex gap-12 mb-10">
            <a
              href="https://wa.me/62895365145790"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition duration-300"
            >
              <IoLogoWhatsapp className="size-10 text-[#25D366]" />
            </a>
            <a
              href="https://www.instagram.com/bagass.7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition duration-300"
            >
              <BsInstagram className="size-10 text-[#E1306C]" />
            </a>
            <a
              href="https://www.linkedin.com/in/bagasrizkiyanto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition duration-300"
            >
              <FaLinkedin className="size-10 text-[#0077B5]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
