"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
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

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    if (isAuthenticated && !socket) {
      const newSocket = io("http://localhost:3000", {
        path: "/socket.io",
        withCredentials: true,
        forceNew: true,
        reconnectionAttempts: 3,
        timeout: 2000,
        transports: ["websocket", "polling"],
      });
      setSocket(newSocket);

      newSocket.on("connect", () => {
        console.log("Connected to server");
      });

      newSocket.on("disconnect", (reason) => {
        console.log("Disconnected from server:", reason);
      });

      newSocket.on("connect_error", (error) => {
        console.error("Connection error:", error);
      });

      newSocket.on("connect_timeout", (timeout) => {
        console.error("Connection timeout:", timeout);
      });

      newSocket.on("reconnect_attempt", (attemptNumber) => {
        console.log("Reconnection attempt:", attemptNumber);
      });

      return () => {
        newSocket.close();
      };
    }
  }, [isAuthenticated, socket]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
