import React from "react";
import { ChatListAcademico } from "@/components/Chat/ChatListAcademico";
import { ChatWindow } from "@/components/Chat/ChatWindowComponent";
import { ChatInput } from "@/components/Chat/ChatInputComponent";
import { Settings } from "@/components/Settings/SettingsComponent";

interface ProfesorComponentProps {
  view: string;
  setView: (view: string) => void;
}

export const ProfesorComponent = ({
  view,
  setView,
}: ProfesorComponentProps) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-co">
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/4 bg-gray-100 overflow-y-auto">
            {view === "chat" && <ChatListAcademico />}
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
