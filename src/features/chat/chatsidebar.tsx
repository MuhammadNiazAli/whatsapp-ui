import React, { useState } from "react";

const Chatsidebar = () => {
  const [selectedFriend, setSelectedFriend] = useState<string | null>(null);
  const friends = ["Alice", "Bob", "Charlie", "David", "Eve"];

  return (
    <div className="p-2 bg-neutral-950 h-screen">
      {friends.map((friend) => (
        <div
          key={friend}
          className={`p-3 mb-1 rounded cursor-pointer  ${
            selectedFriend === friend ? "bg-neutral-700" : "hover:bg-neutral-600"
          }`}
          onClick={() => setSelectedFriend(friend)}
        >
          {friend}
        </div>
      ))}
    </div>
  );
};

export default Chatsidebar;
