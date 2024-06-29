"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
} from "@nextui-org/react";

import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { AvatarComponent } from "./Navbar/AvatarComponent";
import { LoginButton } from "./Navbar/LoginButton";

export default function CustomNavbar() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const router = useRouter()

  return (
    <Navbar isBordered className="bg-red-600 shadow-md fixed top-0 w-full z-50">
      <NavbarBrand
        onClick={() => router.push('/')}
      >
        <p className="font-bold text-inherit">Social-UTN</p>
      </NavbarBrand>

      {isAuthenticated && user? (
        <AvatarComponent/>
      ): (
        <LoginButton/>
      )}
      
    </Navbar>
  );
}
