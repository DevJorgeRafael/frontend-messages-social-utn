import { Chat } from "./Chat.interface";

export interface TipoChat {
    tipo_chat_id: number;
    tipo_chat_nombre: string;
    chats: Chat[];
}

