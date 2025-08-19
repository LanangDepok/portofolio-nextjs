"use client";

import Link from "next/link";
import { useContext } from "react";
import { MdGTranslate } from "react-icons/md";
import { ToggleContext } from "../context/ToggleContext";

export default function Navbar() {
  const { toggleValue, setToggleValue } = useContext(ToggleContext);

  return (
    <div className="top-0 right-0 left-0 z-10 fixed flex justify-between items-center bg-linear-to-t from-cyan-800 to-black px-5 h-20 font-bold">
      <div className="flex items-center gap-5 lg:w-1/2">
        <div
          className="lg:hidden flex flex-col gap-2"
          onClick={() => setToggleValue(!toggleValue)}
        >
          <div className="bg-white w-7 h-1"></div>
          <div className="bg-white w-7 h-1"></div>
        </div>
        <p className="text-3xl">Portofolio</p>
      </div>
      <div className="flex items-center gap-1 h-10">
        <MdGTranslate className="w-7 h-7" />
        <p className="font-bold text-lg">ID</p>
      </div>
      <div
        className={`${
          toggleValue ? "translate-x-40 md:translate-x-48" : ""
        } flex flex-col lg:flex-row lg:justify-end gap-7 lg:gap-5 fixed lg:static w-40 md:w-48 lg:w-1/2 top-20 bottom-0 -left-40 md:-left-48 lg:translate-none bg-linear-to-bl from-cyan-800 to-black lg:bg-none`}
      >
        <Link
          href="/"
          className="hover:bg-linear-to-l hover:from-white hover:to-gray-400 px-5 lg:px-0 py-2"
        >
          <div>Perkenalan</div>
        </Link>
        <Link
          href="/skills"
          className="hover:bg-linear-to-l hover:from-white hover:to-gray-400 px-5 lg:px-0 py-2"
        >
          <div>Keahlian</div>
        </Link>
        <Link
          href="/experiences"
          className="hover:bg-linear-to-l hover:from-white hover:to-gray-400 px-5 lg:px-0 py-2"
        >
          <div>Pengalaman</div>
        </Link>
        <Link
          href="/certificates"
          className="hover:bg-linear-to-l hover:from-white hover:to-gray-400 px-5 lg:px-0 py-2"
        >
          <div>Sertifikat</div>
        </Link>
      </div>
    </div>
  );
}
