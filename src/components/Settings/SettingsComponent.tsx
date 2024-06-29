import React from "react";
import {
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineQuestionCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { BiCog } from "react-icons/bi";
import { useAuth } from "@/context/authContext";

export const Settings = () => {
  const { logout } = useAuth();

  return (
    <div className="p-4 max-w-md text-gray-800 h-full">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="mb-4">
      </div>
      <div className="flex items-center mb-4">
        <img
          src="https://i.pravatar.cc/150?u=avatar"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-xl">Name</h2>
          <p className="text-sm text-gray-400">Online</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center cursor-pointer hover:bg-slate-400 p-2 rounded">
          <AiOutlineUser className="mr-4" size={24} />
          <span>Account</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-slate-400 p-2 rounded">
          <AiOutlineLock className="mr-4" size={24} />
          <span>Privacy</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-slate-400 p-2 rounded">
          <AiOutlineMessage className="mr-4" size={24} />
          <span>Chats</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-slate-400 p-2 rounded">
          <AiOutlineBell className="mr-4" size={24} />
          <span>Notifications</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-slate-400 p-2 rounded">
          <BiCog className="mr-4" size={24} />
          <span>Keyboard shortcuts</span>
        </div>
        <div className="flex items-center cursor-pointer hover:bg-slate-400 p-2 rounded">
          <AiOutlineQuestionCircle className="mr-4" size={24} />
          <span>Help</span>
        </div>
        <div
          className="flex items-center cursor-pointer hover:bg-red-200 p-2 rounded text-red-600"
          onClick={logout}
        >
          <AiOutlineLogout className="mr-4" size={24} />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};
