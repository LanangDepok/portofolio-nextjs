import Image from "next/image";
import photoProfile from "@/public/profile.jpg";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Bio from "@/app/components/Bio";
import Title from "@/app/components/Title";

export default function Home() {
  return (
    <>
      <Title />
      <div className="flex lg:flex-row-reverse flex-col gap-10 lg:gap-36">
        <div>
          <div className="relative mx-auto rounded-xl w-72 h-96 overflow-hidden">
            <Image
              src={photoProfile}
              alt="photo-profile"
              className="object-bottom object-cover"
              fill
              priority
              placeholder="blur"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div>
            <p className="font-bold text-2xl">Bagas Rizkiyanto</p>
            <p className="font-semibold text-lg">Full Stack Web Developer</p>
          </div>
          <Bio />
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
