"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MetaAIModal from "./MetaAIModal";
import FeedbackModal from "./FeedbackModal";
import Image from "next/image";
import { useThemeContext } from "@/context/ThemeContext";

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isMetaOpen, setMetaOpen] = useState(false);
  const [isFeedbackOpen, setFeedbackOpen] = useState(false);

  const { theme } = useThemeContext();
  const isDark = theme === "dark" || theme === "system";

  const getIcon = (name: string, active: boolean) => {
    return active
      ? `/assets/icons/${name}${isDark ? "darkactive" : "whiteactive"}.png`
      : `/assets/icons/${name}.png`;
  };

  const navItems = [
    { href: "/chats", name: "chats", label: "Chats" },
    { href: "/calls", name: "calls", label: "Calls" },
    { href: "/status", name: "status", label: "Status" },
    { href: "/channels", name: "channels", label: "Channels" },
    { href: "/communities", name: "communities", label: "Communities" },
  ];

  const bottomItems = [
    { href: "/settings", name: "setting", label: "Settings" },
    { href: "/profile", name: "profile", label: "Profile" },
  ];

  return (
    <>
      <MetaAIModal isOpen={isMetaOpen} onClose={() => setMetaOpen(false)} />
      <FeedbackModal
        isOpen={isFeedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />

     
      <div
        className={`
          fixed left-0 top-14 bottom-0 w-16 flex flex-col justify-between items-center py-2
          ${isDark ? "bg-neutral-900 border-neutral-700" : "bg-neutral-100 border-neutral-300"}
        `}
      >
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            const iconPath = getIcon(item.name, active);

            return (
              <Link key={item.href} href={item.href} className="group relative">
                <div
                  className={`flex justify-center items-center w-10 h-10 rounded-full transition-colors
                    ${
                      active
                        ? isDark
                          ? "bg-neutral-700/50"
                          : "bg-neutral-300/70"
                        : isDark
                        ? "hover:bg-neutral-700/50"
                        : "hover:bg-neutral-300/50"
                    }
                  `}
                >
                  <Image src={iconPath} width={20} height={20} alt={item.label} />
                </div>

                <span
                  className={`absolute left-full ml-1 whitespace-nowrap hidden group-hover:block
                    text-[10px] px-1.5 py-0.5 rounded shadow
                    ${isDark ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"}
                    -mt-7
                  `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}

          <hr className={`${isDark ? "border-neutral-700" : "border-neutral-300"} w-full my-2`} />

          <button
            onClick={() => setMetaOpen(true)}
            className={`
              group relative flex justify-center items-center w-10 h-10 rounded-full transition-colors
              ${isDark ? "hover:bg-neutral-700/50" : "hover:bg-neutral-300/50"}
            `}
          >
            <Image
              src="https://brandlogos.net/wp-content/uploads/2025/08/meta_ai-logo_brandlogos.net_xjwry-512x504.png"
              width={20}
              height={20}
              alt="Meta AI"
              unoptimized
            />

            <span
              className={`absolute left-full ml-1 whitespace-nowrap hidden group-hover:block text-[10px] px-1.5 py-0.5 rounded shadow
                ${isDark ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"}
              `}
            >
              Meta AI
            </span>
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <button
            onClick={() => setFeedbackOpen(true)}
            className={`
              group relative flex justify-center items-center w-10 h-10 rounded-full transition-colors
              ${isDark ? "hover:bg-neutral-700/50" : "hover:bg-neutral-300/50"}
            `}
          >
            <Image
              src="/assets/icons/feedback.png"
              width={20}
              height={20}
              alt="Feedback"
            />

            <span
              className={`absolute left-full ml-1 whitespace-nowrap hidden group-hover:block text-[10px] px-1.5 py-0.5 rounded shadow
                ${isDark ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"}
              `}
            >
              Send Feedback
            </span>
          </button>

          {bottomItems.map((item) => {
            const active = pathname === item.href;
            const iconPath = getIcon(item.name, active);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex justify-center items-center w-10 h-10 rounded-full transition-colors"
              >
                <div
                  className={`flex justify-center items-center w-full h-full rounded-full
                    ${
                      active
                        ? isDark
                          ? "bg-neutral-700/50"
                          : "bg-neutral-300/70"
                        : isDark
                        ? "hover:bg-neutral-700/50"
                        : "hover:bg-neutral-300/50"
                    }
                  `}
                >
                  <Image src={iconPath} width={20} height={20} alt={item.label} />
                </div>

                <span
                  className={`absolute left-full ml-1 whitespace-nowrap hidden group-hover:block text-[10px] px-1.5 py-0.5 rounded shadow
                    ${isDark ? "bg-white text-neutral-900" : "bg-neutral-900 text-white"}
                  `}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
