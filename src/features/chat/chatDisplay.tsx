"use client";
import React, { useState, useRef } from "react";
import ChatDisplay from "./components/ChatDisplay";
import Chatsidebar from "./chatsidebar";

const Chatview = () => {
  const [sidebarWidth, setSidebarWidth] = useState(320); // default width in px
  const resizerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const startDrag = () => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
  };

  const stopDrag = () => {
    isDragging.current = false;
    document.body.style.cursor = "default";
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const newWidth = e.clientX;
    if (newWidth < 200) return; // minimum sidebar width
    if (newWidth > 600) return; // maximum sidebar width
    setSidebarWidth(newWidth);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleDrag);
    window.addEventListener("mouseup", stopDrag);
    return () => {
      window.removeEventListener("mousemove", handleDrag);
      window.removeEventListener("mouseup", stopDrag);
    };
  }, []);

  return (
    <div className="flex h-[calc(100vh-3.5rem)] mt-14 select-none">
      {/* Sidebar */}
      <div
        className="bg-neutral-800 overflow-y-auto relative -mt-14"
        style={{ width: sidebarWidth }}
      >
        <Chatsidebar />
        {/* Optional shadow / border */}
      </div>

      {/* Resizer */}
      <div
        ref={resizerRef}
        className="w-2 cursor-col-resize bg-transparent -mt-14 hover:bg-white/20 transition-all"
        onMouseDown={startDrag}
      ></div>

      {/* Chat Display */}
      <div className="flex-1">
        <ChatDisplay />
      </div>
    </div>
  );
};

export default Chatview;
