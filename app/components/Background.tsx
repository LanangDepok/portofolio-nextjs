"use client";

import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";
import DarkVeil from "../react-bits/backgrounds/DarkVeil/DarkVeil";
export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  const { closeNavbar } = useContext(ToggleContext);

  return (
    <>
      <div className="min-h-screen">
        <DarkVeil
          speed={1}
          hueShift={42}
          noiseIntensity={0}
          scanlineFrequency={0}
          scanlineIntensity={0}
          warpAmount={3}
          resolutionScale={1.3}
        />
      </div>
      <div
        className="top-28 absolute px-12 lg:px-24 w-full"
        onClick={() => closeNavbar()}
      >
        {children}
      </div>
    </>
  );
}
