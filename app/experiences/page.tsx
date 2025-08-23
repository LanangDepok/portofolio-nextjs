"use client";

import { RiPhpLine } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import Card from "./card";
import Image from "next/image";
import toolstoreImage from "@/public/experience/toolstore.jpg";
import msibImage from "@/public/experience/MSIB.png";
import scriptSiImage from "@/public/experience/scriptSI.png";
import Title from "@/app/components/Title";
import { LocaleContext } from "@/app/context/LocaleContext";
import { useContext } from "react";

export default function Experiences() {
  const [localeValue] = useContext(LocaleContext);

  return (
    <>
      <Title />
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
        <Card
          title="Toolstore"
          role="Full Stack Web Developer"
          time={
            localeValue === "en"
              ? "March\u2014July 2023"
              : "Maret\u2014Juli 2023"
          }
          description={
            localeValue === "en"
              ? "Developed the Toolstore application for the Civil Engineering and Mechanical Engineering departments at Politeknik Negeri Jakarta. This application streamlines the management of equipment loans, transitioning from a previously manual process to a more efficient digital system."
              : "Membuat aplikasi Toolstore untuk jurusan Teknik Sipil dan Teknik Mesin di Politeknik Negeri Jakarta. Aplikasi ini mempermudah peminjaman alat dengan mengubah proses yang sebelumnya manual menjadi sistem digital yang lebih efisien."
          }
          technology={[
            {
              icon: <FaHtml5 className="size-8 text-[#F16529]" />,
              name: "HTML",
            },
            {
              icon: <FaCss3 className="size-8 text-[#2965F1]" />,
              name: "CSS",
            },
            {
              icon: <FaBootstrap className="size-8 text-[#6610f2]" />,
              name: "Bootstrap",
            },
            {
              icon: <IoLogoJavascript className="size-8 text-[#F7DF1E]" />,
              name: "JavaScript",
            },
            {
              icon: <RiPhpLine className="size-8 text-[#8993BE]" />,
              name: "PHP",
            },
            {
              icon: <FaLaravel className="size-8 text-[#FF2D20]" />,
              name: "Laravel",
            },
            {
              icon: <GrMysql className="size-8 text-[#00758F]" />,
              name: "MySQL",
            },
          ]}
        >
          <Image
            src={toolstoreImage}
            alt="Toolstore experience image"
            priority
          ></Image>
        </Card>
        <Card
          title="Intern MSIB Batch 5"
          role="Back End Web Developer"
          time={
            localeValue === "en"
              ? "August\u2014December 2023"
              : "Agustus\u2014Desember 2023"
          }
          description={
            localeValue === "en"
              ? "Developed the Pilih Jurusan Psychology Test application at PT Pilihanmu Indonesia Jaya. I was responsible for the Business/Service Workflow, which included managing the application's core logic and processing data received from the Database and API teams. The application was built using PHP with the Laravel Framework. As an achievement, I successfully added a payment feature using Midtrans and a banner feature to enhance the application's functionality."
              : "Mengembangkan aplikasi Tes Psikologi Pilih Jurusan di PT Pilihanmu Indonesia Jaya. Saya bertanggung jawab pada bagian Business/Service Workflow, yang meliputi pengelolaan logika utama aplikasi serta pengolahan data yang diterima dari tim Database dan API. Aplikasi ini dikembangkan menggunakan PHP dengan Framework Laravel. Sebagai pencapaian, saya berhasil menambahkan fitur pembelian menggunakan Midtrans dan fitur banner untuk meningkatkan fungsi aplikasi."
          }
          technology={[
            {
              icon: <RiPhpLine className="size-8 text-[#8993BE]" />,
              name: "PHP",
            },
            {
              icon: <FaLaravel className="size-8 text-[#FF2D20]" />,
              name: "Laravel",
            },
            {
              icon: <BiLogoPostgresql className="size-8 text-[#336791]" />,
              name: "PostgreSQL",
            },
          ]}
        >
          <Image src={msibImage} alt="MSIB experience image" priority></Image>
        </Card>
        <Card
          title="scriptSI"
          role="Full Stack Web Developer"
          time={
            localeValue === "en"
              ? "February\u2014August 2024"
              : "Februari\u2014Agustus 2024"
          }
          description={
            localeValue === "en"
              ? "Developed a Thesis Management application for the Informatics and Computer Engineering Department at Politeknik Negeri Jakarta. This application is designed to streamline the end-to-end thesis management process, from initiation to completion. Additionally, the application has been successfully hosted on the department's server and is ready for use."
              : "Membuat aplikasi Pengelolaan Skripsi untuk Jurusan Teknik Informatika dan Komputer di Politeknik Negeri Jakarta. Aplikasi ini dirancang untuk mempermudah proses pengelolaan skripsi secara menyeluruh, mulai dari awal hingga akhir. Selain itu, aplikasi ini telah berhasil di hosting pada server jurusan dan siap untuk digunakan."
          }
          technology={[
            {
              icon: <FaHtml5 className="size-8 text-[#F16529]" />,
              name: "HTML",
            },
            {
              icon: <FaCss3 className="size-8 text-[#2965F1]" />,
              name: "CSS",
            },
            {
              icon: <RiTailwindCssFill className="size-8 text-[#38B2AC]" />,
              name: "Tailwind CSS",
            },
            {
              icon: <IoLogoJavascript className="size-8 text-[#F7DF1E]" />,
              name: "JavaScript",
            },
            {
              icon: <RiPhpLine className="size-8 text-[#8993BE]" />,
              name: "PHP",
            },
            {
              icon: <FaLaravel className="size-8 text-[#FF2D20]" />,
              name: "Laravel",
            },
            {
              icon: <GrMysql className="size-8 text-[#00758F]" />,
              name: "MySQL",
            },
          ]}
        >
          <Image
            src={scriptSiImage}
            alt="scriptSI experience image"
            priority
          ></Image>
        </Card>
      </div>
    </>
  );
}
