"use client";
import { useAuth } from "@/context/authContext";

export default function Main() {
  const { user, isAuthenticated } = useAuth();
  console.log(user);
  console.log(isAuthenticated)
  
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-gray-800">MainPage</h1>
    </div>
  );
}
