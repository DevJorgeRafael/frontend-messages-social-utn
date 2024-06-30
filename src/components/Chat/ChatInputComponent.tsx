import React from "react";

export const ChatInput = () => {
  return (
    <div className="border p-4">
      <input
        type="text"
        placeholder="Escribir mensaje..."
        className="w-full p-2 border rounded bg-slate-200"
      />
    </div>
  );
};
