"use client";
import React from "react";
import { BsPeople, BsBook, BsBriefcase, BsHouse, BsGear } from "react-icons/bs";
import { useAuth } from "@/context/authContext";

export const Sidebar = ({ setView }: { setView: (view: string) => void }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white w-15 shadow-md h-screen fixed top-0 left-0 flex flex-col items-center justify-between">
      <BsHouse
        onClick={() => setView("home")}
        className="m-4 hover:bg-red-400"
        size={24}
      />
      <div>
        <BsPeople
          onClick={() => setView("main")}
          className="m-4 cursor-pointer"
          size={24}
        />
        <BsBook
          onClick={() => setView("chat")}
          className="m-4 cursor-pointer"
          size={24}
        />
        <BsBriefcase
          onClick={() => setView("settings")}
          className="m-4 cursor-pointer"
          size={24}
        />
      </div>
      <BsGear
        onClick={() => setView("settings")}
        className="m-4 cursor-pointer"
        size={24}
      />
    </div>
  );
};
