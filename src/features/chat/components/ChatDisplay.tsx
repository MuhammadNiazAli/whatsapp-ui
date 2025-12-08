import React from "react";

const ChatDisplay = () => {
  return (
    <div
      className="
        w-full 
        border border-neutral-700 
        rounded-tl-[5px] 
        overflow-hidden
        h-[calc(100vh-3.5rem)] /* 100vh minus top navbar height (14 = 3.5rem) */
        mt-14
      "
    >
      {/* Scrollable inner content */}
      <div className="px-4 py-4 h-full overflow-y-auto">
        <h1 className="text-white mb-4">Hello</h1>
        {/* Example repeated content to show scroll */}
        {Array.from({ length: 50 }).map((_, i) => (
          <p key={i} className="text-white py-2">
            Message {i + 1}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
