import { Chat } from "./Chat.interface";

export interface NivelChat {
    nivel_chat_id: number;
    nivel_chat_nombre: string;
    chats: Chat[];
}
