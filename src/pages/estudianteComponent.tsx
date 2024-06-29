import React from "react";
import { ChatList } from "@/components/ChatListComponent";
import { ChatWindow } from "@/components/ChatWindowComponent";
import { ChatInput } from "@/components/ChatInputComponent";
import { Settings } from "@/components/Settings/SettingsComponent";

interface EstudianteComponentProps {
  view: string;
  setView: (view: string) => void;
}

export const EstudianteComponent = ({
  view,
  setView,
}: EstudianteComponentProps) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-co">
        <div className="flex flex-1 overflow-hidden">
          <div className="w-1/4 bg-gray-100 overflow-y-auto">
            {view === "chat" && <ChatList />}
            {view === "settings" && <Settings />}
          </div>
          <div className="flex-1 flex flex-col bg-white">
            <ChatWindow />
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};
