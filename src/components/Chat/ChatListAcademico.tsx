import { useAuth } from "@/context/authContext";
import { AiOutlineTeam } from "react-icons/ai";

export const ChatListAcademico = () => {
  const { user } = useAuth();
  const asignaturas = user?.asignaturas || [];

  return (
    <div className="">
      <div className="mb-4 p-4 border-b-2 pb-2">
        <h2 className="text-2xl font-bold text-gray-800">Académico</h2>
        <input
          type="text"
          placeholder="Buscar chats"
          className="p-2 border rounded mt-2 w-full"
        />
      </div>
      <div>
        {asignaturas.map((asignatura, index) => (
          <div
            key={index}
            className="flex p-2 items-center hover:bg-slate-300 w-full cursor-pointer"
          >
            <AiOutlineTeam className="mr-3 text-gray-800 rounded-full bg-slate-200" size={32}/>
            <div className="flex-grow">
              <p className="font-bold text-gray-800">{asignatura.as_nombre}</p>
              <p className="text-gray-500 text-sm">last message</p>
            </div>
            <div className="text-gray-400 text-sm">10 PM</div>
          </div>
        ))}
      </div>
    </div>
  );
};
