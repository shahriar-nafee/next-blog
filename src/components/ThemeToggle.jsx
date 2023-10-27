"use client";
import { ThemeContext } from "@/app/context/ThemeContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="theme-button" onClick={toggleTheme}>
      <Image src="/moon.png" width={14} height={14} alt="moon" />
      <div
        className="theme-ball"
        style={theme === "dark" ? { left: 2 } : { right: 2 }}
      ></div>
      <Image src="/sun.png" width={14} height={14} alt="sun" />
    </div>
  );
}
