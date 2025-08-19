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
import toolstoreImage from "../../public/experience/toolstore.jpg";
import msibImage from "../../public/experience/MSIB.png";
import scriptSiImage from "../../public/experience/scriptSI.png";

export default function Experiences() {
  return (
    <>
      <p className="mb-10 font-bold text-3xl text-center underline">
        Pengalaman
      </p>
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-2">
        <Card
          title="Toolstore"
          role="Full Stack Web Developer"
          time="Maret - Juli 2023"
          description="Membuat aplikasi Toolstore untuk jurusan Teknik Sipil dan Teknik Mesin di Politeknik Negeri Jakarta. Aplikasi ini mempermudah peminjaman alat dengan mengubah proses yang sebelumnya manual menjadi sistem digital yang lebih efisien."
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
          <Image src={toolstoreImage} alt="Toolstore experience image"></Image>
        </Card>
        <Card
          title="Intern MSIB Batch 5"
          role="Back End Web Developer"
          time="Agustus - Desember 2023"
          description="Mengembangkan aplikasi Tes Psikologi Pilih Jurusan di PT Pilihanmu Indonesia Jaya. Saya bertanggung jawab pada bagian Business/Service Workflow, yang meliputi pengelolaan logika utama aplikasi serta pengolahan data yang diterima dari tim Database dan API. Aplikasi ini dikembangkan menggunakan PHP dengan Framework Laravel. Sebagai pencapaian, saya berhasil menambahkan fitur pembelian menggunakan Midtrans dan fitur banner untuk meningkatkan fungsi aplikasi."
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
          <Image src={msibImage} alt="MSIB experience image"></Image>
        </Card>
        <Card
          title="scriptSI"
          role="Full Stack Web Developer"
          time="Februari - Agustus 2024"
          description="Membuat aplikasi Pengelolaan Skripsi untuk Jurusan Teknik Informatika dan Komputer di Politeknik Negeri Jakarta. Aplikasi ini dirancang untuk mempermudah proses pengelolaan skripsi secara menyeluruh, mulai dari awal hingga akhir. Selain itu, aplikasi ini telah berhasil di hosting pada server jurusan dan siap untuk digunakan."
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
          <Image src={scriptSiImage} alt="scriptSI experience image"></Image>
        </Card>
      </div>
    </>
  );
}
