"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { loginRequest, verifyTokenRequest } from "@/api/auth";
import { loginError } from "@/interfaces/loginError.interface";
import Cookies from "js-cookie";
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";

interface AuthContextType {
  user: EstudianteDetalle | ProfesorDetalle;
  login: (userData: any) => void;
  logout: () => void;
  errors: loginError;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [errors, setErrors] = useState<loginError>({} as loginError);
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const login = async (userData: any) => {
    try {
      setIsLoading(true)
      const response = await loginRequest(userData);
      setUser(response.data);
      setIsAuthenticated(true);
      setIsLoading(false)
    } catch (error: any) {
      setErrors(error.response.data);
      setIsAuthenticated(false);
      setIsLoading(false)
    }
  };

  const logout = () => {
    setIsLoading(true);
    Cookies.remove("access_token");
    setUser(null);
    setIsAuthenticated(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      const timer = setTimeout(() => {
        setErrors({} as loginError);
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      setIsLoading(true);
      const token = Cookies.get('access_token');

      if(!token) {
        setIsAuthenticated(false);
        setUser(null);
        return setIsLoading(false)
      }
      try {
        const res = await verifyTokenRequest()
        if(!res.data) {
          setIsAuthenticated(false);
          return setUser(null);
        }

        setIsAuthenticated(true);
        setUser(res.data);

      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      }
      setIsLoading(false);
    }

    checkLogin();
  }, [])

  return (
    <AuthContext.Provider
      value={{ 
        user, login, 
        logout, errors, 
        isAuthenticated,
        isLoading 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
