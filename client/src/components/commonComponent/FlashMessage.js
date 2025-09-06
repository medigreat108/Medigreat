import React from "react";

const FlashMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 rounded shadow-lg text-lg font-semibold flex items-center gap-2 transition-all duration-300
        ${
          type === "success"
            ? "bg-green-100 text-green-700 border border-green-300"
            : "bg-red-100 text-red-700 border border-red-300"
        }`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default FlashMessage;
