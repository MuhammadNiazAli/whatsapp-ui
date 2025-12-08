import React from "react";

const ChatDisplay = () => {
  return (
    <div
      className="
        w-full 
        border-l border-neutral-700/50
        overflow-hidden
        h-full
        -mt-14
      "
    >
      <div className="px-4 py-4 h-full overflow-y-auto">
        <h1 className="text-white mb-4">Hello</h1>
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
