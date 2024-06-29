import React from "react";
import { ChatList } from "@/components/ChatListComponent";
import { ChatWindow } from "@/components/ChatWindowComponent";
import { ChatInput } from "@/components/ChatInputComponent";
 
export const EstudianteComponent = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-co">
        <div className="flex flex-1 overflow-hidden">
          <ChatList/>
          <div className="flex-1 flex flex-col bg-white">
            <ChatWindow />
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
};
