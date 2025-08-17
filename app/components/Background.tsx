"use client";

import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";
import Lightning from "../blocks/Lightning/Lightning";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { closeNavbar } = useContext(ToggleContext);

  return (
    <>
      <Lightning hue={245} xOffset={0} speed={0.7} intensity={2} size={3} />
      <div
        className="absolute top-24 w-full text-white"
        onClick={() => closeNavbar()}
      >
        {children}
      </div>
    </>
  );
}
