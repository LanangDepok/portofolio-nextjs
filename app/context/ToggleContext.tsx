"use client";

import { createContext, useState } from "react";

interface ToggleContextType {
  toggleValue: boolean;
  setToggleValue: (value: boolean) => void;
  closeNavbar: () => void;
}

export const ToggleContext = createContext<ToggleContextType>({
  toggleValue: false,
  setToggleValue: () => {},
  closeNavbar: () => {},
});

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [toggleValue, setToggleValue] = useState(false);

  const closeNavbar = () => setToggleValue(false);

  return (
    <ToggleContext value={{ toggleValue, setToggleValue, closeNavbar }}>
      {children}
    </ToggleContext>
  );
}
