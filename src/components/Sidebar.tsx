"use client";
import React, { useEffect } from "react";
import { BsPeople, BsBook, BsBriefcase, BsHouse, BsGear } from "react-icons/bs";
import { useAuth } from "@/context/authContext";

export const Sidebar = ({ setView }: { setView: (view: string) => void }) => {
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      document.body.style.paddingLeft = "55px";
    } else {
      document.body.style.paddingLeft = "0";
    }
  }, [isAuthenticated]);

  return (
    <div className="bg-red-600 text-white w-15 shadow-md h-screen fixed top-0 left-0 flex flex-col items-center justify-between">
      <BsHouse
        onClick={() => setView("home")}
        className="m-4 rounded-full cursor-pointer"
        size={24}
      />
      <div>
        {user && "profesor" in user && (
          <BsBriefcase
          onClick={() => setView("settings")}
          className="m-4 cursor-pointer"
          size={24}
        />
        )

        }
        <BsBook
          onClick={() => setView("chat")}
          className="m-4 cursor-pointer"
          size={24}
        />
        <BsPeople
          onClick={() => setView("main")}
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
