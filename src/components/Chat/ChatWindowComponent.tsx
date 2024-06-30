import React from "react";

const messages = [
  { sender: "Doris Brown", content: "Good morning", time: "10:00 AM" },
  {
    sender: "Doris Brown",
    content: "Yeah everything is fine & Next meeting tomorrow 10.00AM",
    time: "10:05 AM",
  },
  // Agrega más mensajes según sea necesario
];

export const ChatWindow = () => {
  return (
    <div className="flex-1 p-4">
      {messages.map((message, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm text-gray-500">{message.time}</p>
          <div className="bg-blue-400 p-2 rounded-lg">
            <p className="font-semibold">{message.sender}</p>
            <p>{message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
