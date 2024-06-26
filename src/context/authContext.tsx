"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { loginRequest } from "@/api/auth";

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState([])
  const [user, setUser] = useState<any>(null);

  const login = async (userData: any) => {
    try {
      const response = await loginRequest(userData)
      console.log(response.data)
      setUser(response.data)
    } catch (error: any) {
      setErrors(error.response.data)
    }
    
  };

  const logout = () => {
    setUser(null);
    // Aquí puedes eliminar el token de localStorage o cookies
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
