import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { Chat } from "@/interfaces/messages/chat.interface";

interface ChatListAcademicoProps {
  chats: Chat[];
  setSelectedChat: (chat: Chat) => void;
}

export const ChatListAcademico = ({
  chats,
  setSelectedChat,
}: ChatListAcademicoProps) => {
  const handleChatClick = (chat: Chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="">
      <div className="mb-4 p-4 border-b-2 pb-2">
        <h2 className="text-2xl font-bold text-gray-800">Académico</h2>
        <input
          type="text"
          placeholder="Buscar chats"
          className="p-2 border rounded mt-2 w-full"
        />
      </div>
      <div>
        {chats.map((chat, index) => (
          <div
            key={index}
            className="flex p-2 items-center hover:bg-slate-300 w-full cursor-pointer"
            onClick={() => handleChatClick(chat)}
          >
            <AiOutlineTeam
              className="mr-3 text-gray-800 rounded-full bg-slate-200"
              size={32}
            />
            <div className="flex-grow">
              <p className="font-bold text-gray-800">{chat.chat_nombre}</p>
              <p className="text-gray-500 text-sm">
                {chat.mensajes[0]?.contenido || "Ningún mensaje aún"}
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              {chat.mensajes[0]?.fecha
                ? new Date(chat.mensajes[0].fecha).toLocaleTimeString()
                : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
