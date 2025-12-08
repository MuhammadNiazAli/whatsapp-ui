/* eslint-disable react-hooks/static-components */
"use client";

import React from "react";
import { useThemeContext } from "@/context/ThemeContext";

const ThemePage = () => {
  const { theme, setTheme } = useThemeContext();

  const ThemeOption = ({
    value,
    label,
  }: {
    value: "light" | "dark" | "system";
    label: string;
  }) => (
    <label
      className="flex items-center justify-between p-3 bg-neutral-800 rounded-lg cursor-pointer border border-neutral-700"
    >
      <span className="text-white text-sm">{label}</span>

      <input
        type="radio"
        name="theme"
        value={value}
        checked={theme === value}
        onChange={() => setTheme(value)}
        className="w-4 h-4 accent-green-500"
      />
    </label>
  );

  return (
    <div className="py-20 px-4 text-white space-y-4">
      <h1 className="text-xl font-semibold mb-2">App Theme</h1>

      <ThemeOption value="light" label="Light" />
      <ThemeOption value="dark" label="Dark" />
      <ThemeOption value="system" label="System Default (Always Dark)" />

      
    </div>
  );
};

export default ThemePage;
