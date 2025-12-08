"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<Props> = ({ isOpen, onClose }) => {
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
        <h2 className="text-lg font-semibold mb-4">Send Feedback</h2>
        <textarea
          className="w-full h-64 p-2 rounded bg-neutral-800 text-white resize-none"
          placeholder="Write your feedback here..."
        />
        <button className="mt-2 bg-white text-neutral-900 px-4 py-2 rounded hover:bg-gray-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackModal;
