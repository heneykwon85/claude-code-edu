"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 28, height = 28, className = "" }: LogoProps) {
  const { theme } = useTheme();

  return (
    <>
      <Image
        src="/logo.png"
        alt="Logo"
        width={width}
        height={height}
        className={`${className} ${theme === "dark" ? "hidden" : "block"}`}
      />
      <Image
        src="/logo-white.png"
        alt="Logo"
        width={width}
        height={height}
        className={`${className} ${theme === "dark" ? "block" : "hidden"}`}
      />
    </>
  );
}
