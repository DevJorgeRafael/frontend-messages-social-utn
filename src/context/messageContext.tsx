import { Mensaje } from '@/interfaces/messages/mensaje.interface';
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface MessageContextType {
    messages: Mensaje[];
    sendMessage: (message: Mensaje) => void;
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const useMessage = () => {
    const context = useContext(MessageContext);
    if (context === undefined) {
        throw new Error('useMessage must be used within a MessageProvider');
    }
    return context;
}

export const MessageProvider = ({ children }: { children: ReactNode }) => {
    const [messages, setMessages] = useState<Mensaje[]>([]);

    const sendMessage = (message: Mensaje) => {
        setMessages([...messages, message]);
    }

    return (
        <MessageContext.Provider value={{ messages, sendMessage }}>
            {children}
        </MessageContext.Provider>
    );
};
