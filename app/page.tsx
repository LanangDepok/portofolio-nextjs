"use client";

import Image from "next/image";
import photoProfile from "../public/profile.jpg";

export default function Home() {
  return (
    <>
      <p className="text-3xl font-bold text-center underline mb-10">
        Perkenalan
      </p>
      <div className="relative size-48 rounded-full overflow-hidden mx-auto mb-12">
        <Image
          src={photoProfile}
          fill
          alt="photo-profile"
          className="object-cover object-bottom"
        ></Image>
      </div>
      <div>
        <p
          className="text-4xl ml-20 font-bold"
          style={{ fontVariant: "small-caps" }}
        >
          Hello World
        </p>
        <p className="text-xl ml-20 font-semibold">Bagas Rizkiyanto</p>
        <p className="text-lg ml-20 font-semibold">Full Stack Web Developer</p>
      </div>
    </>
  );
}
