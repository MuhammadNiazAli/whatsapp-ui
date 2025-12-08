"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MetaAIModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="w-96 h-full bg-neutral-900 p-4 text-white relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-lg"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-4">Meta AI Chat</h2>
        <p className="text-sm">This is your Meta AI modal content.</p>
      </div>
    </div>
  );
};

export default MetaAIModal;
