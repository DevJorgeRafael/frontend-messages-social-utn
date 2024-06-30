import React from "react";
import { Mensaje } from "@/interfaces/messages/mensaje.interface";
import { Chat } from "@/interfaces/messages/chat.interface";
import { AiOutlineTeam } from "react-icons/ai";

interface ChatWindowProps {
  messages: Mensaje[];
  selectedChat: Chat | null;
}

export const ChatWindow = ({ messages, selectedChat }: ChatWindowProps) => {

  return (
    <div className="h-full">
      {selectedChat ? (
        <>
          <div className="flex p-2 border-2">
            <AiOutlineTeam
              className="mr-3 text-gray-800 rounded-full bg-slate-200"
              size={32}
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {selectedChat.chat_nombre}
            </h2>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm text-gray-500">
                  {new Date(message.fecha).toLocaleTimeString()}
                </p>
                <div className="bg-blue-400 p-2 rounded-lg">
                  <p className="font-semibold">{message.usuario}</p>
                  <p>{message.contenido}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h-full flex p-4 overflow-y-auto justify-center items-center">
          
          <h6 className="text-center text-gray-500">
            Ningún chat seleccionado
          </h6>
        </div>
      )}
    </div>
  );
};
