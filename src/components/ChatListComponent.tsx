
const users = [
  { name: "Patrick", status: "Hey! there I’m available" },
  { name: "Mark", status: "Images" },
  { name: "General", status: "This theme is awesome!" },
  // Agrega más usuarios según sea necesario
];

export const ChatList = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-800">Chats</h2>
      <input
        type="text"
        placeholder="Search chats"
        className="p-2 border rounded mt-4 mb-4 w-full"
      />
      <div className="mt-4">
        {users.map((user, index) => (
          <div key={index}
            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
          >
            <div className="ml-2">
              <p className="font-bold text-gray-800">{user.name}</p>
              <p className="text-sm text-gray-600">{user.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
