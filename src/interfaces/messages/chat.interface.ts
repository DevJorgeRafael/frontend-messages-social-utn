import { Mensaje } from "./mensaje.interface";
import { NivelChat } from "./nivel-chat.interface";
import { TipoChat } from "./tipo-chat.interface";
import { UsuariosChat } from "./usuarios-chat.interface";

export interface Chat {
    chat_id: number;
    chat_nombre: string;
    tipoChat: TipoChat;
    nivelChat: NivelChat;
    usuariosChat: UsuariosChat[];
    mensajes: Mensaje[];
}
