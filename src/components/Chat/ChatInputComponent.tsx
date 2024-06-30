import React, { useState } from "react";
import { Chat } from "@/interfaces/messages/chat.interface";
import { useSocket } from "@/context/socketContext";
import { useAuth } from "@/context/authContext";
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";

interface ChatInputProps {
  selectedChat: Chat;
}

export const ChatInput = ({ selectedChat }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const { socket } = useSocket();
  const { user } = useAuth()
  // console.log(socket)

  const displayUsuario =
    (user as EstudianteDetalle)?.estudiante?.est_usuario ||
    (user as ProfesorDetalle)?.profesor?.pr_usuario ||
    "";

  const sendMessage = () => {
    if (message.trim() && socket) {
      const payload = {
        mensaje: {
          chat_id: selectedChat.chat_id === 0 ? null : selectedChat.chat_id,
          contenido: message,
          usuario: displayUsuario,
          fecha: new Date(),
          leido: false 
        },
        chat: null as any
      };

      if (selectedChat.chat_id === 0) {
        payload.chat = {
          chat_nombre: selectedChat.chat_nombre,
          tipo_chat_id: selectedChat.tipoChat.tipo_chat_id,
          nivel_chat_id: selectedChat.nivelChat.nivel_chat_id,
        };
      }

      console.log(socket.emit)
      console.log("enviando mensaje: " ,payload)
      socket.emit('SendMessage', payload);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-slate-200">
      <input
        type="text"
        placeholder="Escribe tu mensaje"
        className="p-2 border rounded w-full text-gray-800"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
    </div>
  );
};
