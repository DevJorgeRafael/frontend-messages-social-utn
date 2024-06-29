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
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";
import Cookies from "js-cookie";

interface AuthContextType {
  user: EstudianteDetalle | ProfesorDetalle | null;
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
  const [user, setUser] = useState<EstudianteDetalle | ProfesorDetalle | null>( null );
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  const login = async (userData: any) => {
    try {
      setIsLoading(true);
      const response = await loginRequest(userData);
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error: any) {
      setErrors(error.response.data);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
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
      const token = Cookies.get("access_token");

      if (!token) {
        setIsAuthenticated(false);
        setUser(null);
        setIsLoading(false); 
        return;
      }

      try {
        const res = await verifyTokenRequest();
        // console.log(res)
        if (!res.data) {
          setIsAuthenticated(false);
          setUser(null);
        } else {
          setIsAuthenticated(true);
          setUser(res.data);
        }
      } catch (error) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false); 
      }
    }

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        errors,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
