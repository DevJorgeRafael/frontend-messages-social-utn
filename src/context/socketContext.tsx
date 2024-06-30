"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import Cookies from "js-cookie";
import { useAuth } from "./authContext";

interface SocketContextType {
  socket: Socket | null;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error("useSocket must be used within a SocketProvider");
  }
  return context;
};

interface SocketProviderProps {
  children: ReactNode;
}

export const SocketProvider = ({ children }: SocketProviderProps) => {
  const { user, isAuthenticated } = useAuth()
  const token = Cookies.get("access_token");
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (token) {
      const newSocket = io("http://localhost:3000", {
        query: { token },
        withCredentials: true,
        transports: ["websocket", "polling"],
      });

      newSocket.on("connected", (welcomeMessage: string) => {
        console.log(welcomeMessage);
      });

      newSocket.on("disconnect", (reason) => {
        console.log("Disconnected from WebSocket server:", reason);
      });

      newSocket.on("connect_error", (error) => {
        console.error("WebSocket connection error:", error);
      });

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [token]);

  useEffect(() => {
    if (!isAuthenticated && socket) {
      socket.close(); //Cierra el socket y no intenta reconectarse, dissconnect() si intenta volver a conectarse
    }
  }, [isAuthenticated, user])

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
