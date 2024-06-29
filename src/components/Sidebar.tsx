"use client";
import React from "react";
import { BsPeople, BsBook, BsBriefcase, BsHouse, BsGear } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export const Sidebar = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white w-15 shadow-md h-screen fixed top-0 left-0 flex flex-col items-center justify-between">
      <BsHouse
        onClick={() => router.push("/")}
        className="m-4 hover:bg-red-400"
        size={24}
      />

      <div>
        <BsPeople
          onClick={() => router.push("/main")}
          className="m-4 cursor-pointer"
          size={24}
        />
        <BsBook
          onClick={() => router.push("/chat")}
          className="m-4 cursor-pointer"
          size={24}
        />
        <BsBriefcase
          onClick={() => router.push("/settings")}
          className="m-4 cursor-pointer"
          size={24}
        />
      </div>

      <BsGear
        onClick={() => router.push("/settings")}
        className="m-4 cursor-pointer"
        size={24}
      />
    </div>
  );
};
