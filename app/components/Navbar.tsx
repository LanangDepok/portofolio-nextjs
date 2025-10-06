"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useContext } from "react";
import { MdGTranslate } from "react-icons/md";
import { ToggleContext } from "../context/ToggleContext";
import { LocaleContext } from "../context/LocaleContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { toggleValue, setToggleValue } = useContext(ToggleContext);
  const [localeValue, toggleLocale] = useContext(LocaleContext);
  const { closeNavbar } = useContext(ToggleContext);
  const pathname = usePathname();

  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [20, 21], // Scroll range: 0px to 200px
    ["transparent", "linear-gradient(to top, #155E75, #000000)"] // From transparent to gradient
  );

  return (
    <motion.div
      style={{ background }}
      className="top-0 right-0 left-0 z-10 fixed flex justify-between items-center px-5 h-20 font-bold"
    >
      <div className="flex items-center gap-5 lg:w-1/2">
        <div
          className="lg:hidden flex flex-col gap-2 hover:cursor-pointer"
          onClick={() => setToggleValue(!toggleValue)}
        >
          <div
            className={`${
              toggleValue
                ? "rotate-45 origin-left -translate-y-[5px]"
                : "rotate-0 origin-left translate-y-0"
            } bg-white w-8 h-1 transition duration-500`}
          ></div>
          <div
            className={`${
              toggleValue
                ? "-rotate-45 origin-left translate-y-[5px]"
                : "rotate-0 origin-left translate-y-0"
            } bg-white w-8 h-1 transition duration-500`}
          ></div>
        </div>
        <Link href={"/"}>
          <p className="text-3xl">
            {localeValue === "id" ? "Portofolio" : "Portfolio"}
          </p>
        </Link>
      </div>
      {/* <div
        className="flex items-center gap-1 h-10 hover:cursor-pointer"
        onClick={() => {
          toggleLocale();
        }}
      >
        <MdGTranslate className="w-7 h-7" />
        <p className="font-bold text-lg">
          {localeValue === "id" ? "ID" : "EN"}
        </p>
      </div> */}
      <div
        className={`${
          toggleValue && "translate-x-40 md:translate-x-48"
        } transition duration-500 flex flex-col items-center lg:flex-row lg:justify-end gap-7 lg:gap-5 fixed lg:static w-40 md:w-48 lg:w-1/2 top-20 bottom-0 -left-40 md:-left-48 lg:translate-none bg-linear-to-bl from-cyan-800 to-black lg:bg-none`}
      >
        <Link
          href="/"
          className={`${
            pathname === "/" && "underline underline-offset-8"
          }  hover:bg-linear-to-l hover:from-white hover:text-black hover:to-gray-400 px-5 w-full lg:w-auto lg:px-3 py-2 lg:hover:rounded-2xl lg:hover:px-3`}
          onClick={() => closeNavbar()}
        >
          <div>{localeValue === "en" ? "Introduction" : "Perkenalan"}</div>
        </Link>
        <Link
          href="/skills"
          className={`${
            pathname === "/skills" && "underline underline-offset-8"
          }  hover:bg-linear-to-l hover:from-white hover:text-black hover:to-gray-400 px-5 w-full lg:w-auto lg:px-3 py-2 lg:hover:rounded-2xl lg:hover:px-3`}
          onClick={() => closeNavbar()}
        >
          <div>{localeValue === "en" ? "Skills" : "Keahlian"}</div>
        </Link>
        <Link
          href="/experiences"
          className={`${
            pathname === "/experiences" && "underline underline-offset-8"
          }  hover:bg-linear-to-l hover:from-white hover:text-black hover:to-gray-400 px-5 w-full lg:w-auto lg:px-3 py-2 lg:hover:rounded-2xl lg:hover:px-3`}
          onClick={() => closeNavbar()}
        >
          <div>{localeValue === "en" ? "Experiences" : "Pengalaman"}</div>
        </Link>
        <Link
          href="/certificates"
          className={`${
            pathname === "/certificates" && "underline underline-offset-8"
          }  hover:bg-linear-to-l hover:from-white hover:text-black hover:to-gray-400 px-5 w-full lg:w-auto lg:px-3 py-2 lg:hover:rounded-2xl lg:hover:px-3`}
          onClick={() => closeNavbar()}
        >
          <div>{localeValue === "en" ? "Certificates" : "Sertifikat"}</div>
        </Link>
        <div
          className="flex items-center gap-1 mt-5 lg:mt-0 lg:ml-10 h-10 hover:cursor-pointer"
          onClick={() => {
            toggleLocale();
          }}
        >
          <MdGTranslate className="w-7 h-7" />
          <p className="font-bold text-lg">
            {localeValue === "id" ? "ID" : "EN"}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
