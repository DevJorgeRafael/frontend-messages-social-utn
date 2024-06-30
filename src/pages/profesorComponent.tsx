"use client"
import React, { useEffect, useState } from "react";
import { ChatListAcademico } from "@/components/Chat/ChatListAcademico";
import { ChatWindow } from "@/components/Chat/ChatWindowComponent";
import { ChatInput } from "@/components/Chat/ChatInputComponent";
import { Settings } from "@/components/Settings/SettingsComponent";
import { Mensaje } from "@/interfaces/messages/mensaje.interface";
import { Chat } from "@/interfaces/messages/chat.interface";
import { useAuth } from "@/context/authContext";
import { useSocket } from "@/context/socketContext";

interface ProfesorComponentProps {
  view: string;
  setView: (view: string) => void;
}



export const ProfesorComponent = ({
  view,
  setView,
}: ProfesorComponentProps) => {
  const { user } = useAuth()
  const [chats, setChats] = useState<Chat[]>([]);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Mensaje[]>([]);
  const { socket } = useSocket();

  useEffect(() => {
    const initialChats = user?.asignaturas.map((asignatura) => ({
      chat_id: 0,
      chat_nombre: asignatura.as_nombre,
      tipoChat: { tipo_chat_id: 2, tipo_chat_nombre: "General", chats: [] },
      nivelChat: { nivel_chat_id: 4, nivel_chat_nombre: "Asignatura", chats: [] },
      usuariosChat: [],
      mensajes: [],
    })) || []; 
    setChats(initialChats);
  }, [user])

  useEffect(() => {
    if (socket) {
      socket.emit("getChats", { tipo_chat_id: 2, nivel_chat_id: 4 });

      socket.on("chats", (fetchedChats: Chat[]) => {
        setChats((prevChats) => {
          // Reemplazar los chats vacíos con los datos obtenidos si coinciden con el nombre de la asignatura
          return prevChats.map((chat) => {
            const matchedChat = fetchedChats.find(
              (fetchedChat) => fetchedChat.chat_nombre === chat.chat_nombre
            );
            return matchedChat ? matchedChat : chat;
          });
        });
      });

      return () => {
        socket.off("chats");
      };
    }
  }, [socket]);

  useEffect(() => {
    if (selectedChat && socket) {
      socket.emit("getChatMessages", selectedChat.chat_id);

      socket.on("chatMessages", (chatMessages) => {
        setMessages(chatMessages);
      });

      socket.on("messageReceived", (newMessage) => {
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });

      return () => {
        socket.off("chatMessages");
        socket.off("messageReceived");
      };
    }
  }, [selectedChat, socket]);

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-co">
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/4 bg-gray-100 overflow-y-auto">
            {view === "chat" && 
              <ChatListAcademico 
                chats={chats}
                setSelectedChat={setSelectedChat}
              />}
            {view === "settings" && <Settings />}
          </div>
          <div className="flex-1 flex flex-col bg-white">
            <ChatWindow messages={messages} selectedChat={selectedChat} />
            {selectedChat && <ChatInput selectedChat={selectedChat} />}
          </div>
        </div>
      </div>
    </div>
  );
};
