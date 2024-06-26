"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { loginRequest } from "@/api/auth";
import { loginError } from "@/app/interfaces/loginError.interface";

interface AuthContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
  errors: loginError;
  isAuthenticated: boolean;
}

import Cookies from 'js-cookie';
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState({} as loginError)
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = async (userData: any) => {
    try {
      const response = await loginRequest(userData)
      console.log(response.data)
      setUser(response.data)
      setIsAuthenticated(true)
    } catch (error: any) {
      setErrors(error.response.data)
      setIsAuthenticated(false)
    }
    
  };

  const logout = () => {
    Cookies.remove('access_token');
    setUser(null);
    setIsAuthenticated(false)
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({} as loginError)
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  return (
    <AuthContext.Provider value={{ 
      user, login, 
      logout, errors,
      isAuthenticated
    }}>
      {children}
    </AuthContext.Provider>
  );
};

