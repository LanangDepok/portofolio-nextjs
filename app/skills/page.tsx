import { RiPhpLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSqlite } from "react-icons/si";
import { DiCodeigniter } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import Title from "@/app/components/Title";

export default function Skills() {
  return (
    <>
      <Title />
      <div className="gap-y-20 lg:gap-x-16 grid grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <FaHtml5 className="size-20 text-[#F16529] hover:scale-150 hover:-translate-y-5" />
          <p>HTML</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3 className="size-20 text-[#2965F1] hover:scale-150 hover:-translate-y-5" />
          <p>CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <RiTailwindCssFill className="size-20 text-[#38B2AC] hover:scale-150 hover:-translate-y-5" />
          <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="size-20 text-[#6610f2] hover:scale-150 hover:-translate-y-5" />
          <p>Bootstrap</p>
        </div>
        <div className="flex flex-col items-center">
          <IoLogoJavascript className="size-20 text-[#F7DF1E] hover:scale-150 hover:-translate-y-5" />
          <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTypescript className="size-20 text-[#007ACC] hover:scale-150 hover:-translate-y-5" />
          <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="size-20 text-[#61DAFB] hover:scale-150 hover:-translate-y-5" />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <SiNextdotjs className="size-20 text-[#FFFFFF] hover:scale-150 hover:-translate-y-5" />
          <p>Next JS</p>
        </div>
        <div className="flex flex-col items-center">
          <RiPhpLine className="size-20 text-[#8993BE] hover:scale-150 hover:-translate-y-5" />
          <p>PHP</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLaravel className="size-20 text-[#FF2D20] hover:scale-150 hover:-translate-y-5" />
          <p>Laravel</p>
        </div>
        <div className="flex flex-col items-center">
          <DiCodeigniter className="size-20 text-[#DD4814] hover:scale-150 hover:-translate-y-5" />
          <p>CodeIgniter</p>
        </div>
        <div className="flex flex-col items-center">
          <FaJava className="size-20 text-[#007396] hover:scale-150 hover:-translate-y-5" />
          <p>Java</p>
        </div>
        <div className="flex flex-col items-center">
          <BiLogoSpringBoot className="size-20 text-[#6DB33F] hover:scale-150 hover:-translate-y-5" />
          <p>Springboot</p>
        </div>
        <div className="flex flex-col items-center">
          <GrMysql className="size-20 text-[#00758F] hover:scale-150 hover:-translate-y-5" />
          <p>MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <BiLogoPostgresql className="size-20 text-[#336791] hover:scale-150 hover:-translate-y-5" />
          <p>PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <SiSqlite className="size-20 text-[#003B57] hover:scale-150 hover:-translate-y-5" />
          <p>SQLite</p>
        </div>
      </div>
    </>
  );
}
