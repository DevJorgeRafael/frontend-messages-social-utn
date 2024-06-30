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
import { Avatar } from "@nextui-org/react";
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";

export const Settings = () => {
  const { logout, user } = useAuth();

  const displayName =
    (user as EstudianteDetalle)?.estudiante?.est_nombre ||
    (user as ProfesorDetalle)?.profesor?.pr_nombre ||
    "";
  const displayLastName =
    (user as EstudianteDetalle)?.estudiante?.est_apellido ||
    (user as ProfesorDetalle)?.profesor?.pr_apellido ||
    "";
  const displayEmail =
    (user as EstudianteDetalle)?.estudiante?.est_email ||
    (user as ProfesorDetalle)?.profesor?.pr_email ||
    "";
  const displayUsuario =
    (user as EstudianteDetalle)?.estudiante?.est_usuario ||
    (user as ProfesorDetalle)?.profesor?.pr_usuario ||
    "";


  return (
    <div className="p-4 max-w-md text-gray-800 h-full">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="mb-4"></div>
      <div className="flex items-center mb-4">
        <Avatar className="mr-1">
          <AiOutlineUser />
        </Avatar>
        <div>
          <h2 className="text-xl">
            {displayName} {displayLastName}
          </h2>
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
          className="flex items-center cursor-pointer hover:bg-red-300 p-2 rounded text-red-600"
          onClick={logout}
        >
          <AiOutlineLogout className="mr-4" size={24} />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};
