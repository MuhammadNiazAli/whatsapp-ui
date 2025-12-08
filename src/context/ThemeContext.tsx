/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "light" | "dark" | "system";

interface ThemeContextType {
  theme: ThemeType;
  isDark: boolean;
  setTheme: (t: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  isDark: true,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeType>("dark");

  const applyTheme = (t: ThemeType) => {
    let finalTheme = t;

    if (t === "system") {
      finalTheme = "dark";
    }

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(finalTheme);

    setThemeState(t);
    localStorage.setItem("app-theme", t);
  };

  useEffect(() => {
    const saved = localStorage.getItem("app-theme") as ThemeType | null;

    if (saved) applyTheme(saved);
    else applyTheme("dark");
  }, []);

  const isDark = theme === "dark" || theme === "system";

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
