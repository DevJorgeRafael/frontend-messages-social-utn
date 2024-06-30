import { Chat } from "./chat.interface";

export interface Mensaje {
    mensaje_id: number;
    chat_id: number;
    contenido: string;
    fecha: Date;
    usuario: string;
    leido: boolean;
    chat: Chat;
}

