import React from "react";
import { ChatList } from "@/components/ChatListComponent";
import { ChatWindow } from "@/components/ChatWindowComponent";
import { ChatInput } from "@/components/ChatInputComponent";

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
      {view === "chat" && (
        <div className="flex-1 flex flex-co">
          <div className="flex flex-1 overflow-hidden">
            <ChatList />
            <div className="flex-1 flex flex-col bg-white">
              <ChatWindow />
              <ChatInput />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
