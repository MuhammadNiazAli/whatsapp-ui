"use client";

import React from "react";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

const TopNavbar = () => {
  const { theme } = useThemeContext();
  const isDark = theme === "dark" || theme === "system";

  return (
    <div
      className={`w-full h-14 fixed top-0 left-0 flex items-center px-4 z-10
        ${isDark ? "bg-neutral-900" : "bg-neutral-100"}
        `}
    >
      {/* Logo */}
      <Image
        src="/assets/logo/logo.png"
        width={22}
        height={40}
        alt="Logo"
        className="object-contain select-none"
      />

      {/* Text next to logo */}
      <span
        className={`ml-2 font-normal text-[14px]
          ${isDark ? "text-white" : "text-neutral-900"}`}
      >
        WhatsApp
      </span>
    </div>
  );
};

export default TopNavbar;
