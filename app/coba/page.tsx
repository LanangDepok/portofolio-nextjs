"use client";

import { motion } from "motion/react";

export default function Coba() {
  return (
    <div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <motion.div
        className="size-20"
        initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0 }}
        whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1 }}
      />
    </div>
  );
}
