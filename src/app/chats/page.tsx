import Chatview from "@/features/chat/chatDisplay";
import React from "react";

const Page = () => {
  return (
    <div
      className="
        w-full
        h-[calc(100vh-3.5rem)]
        border-t border-l border-neutral-700/70
        rounded-tl-[5px]
        overflow-hidden
        mt-14
      "
    >
      <Chatview />
    </div>
  );
};

export default Page;
