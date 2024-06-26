'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-8">
          Red Social de la Universidad Técnica del Norte
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Bienvenidos a Social-UTN, red social oficial de la Universidad Técnica del
          Norte. Conéctate, comparte y colabora con la comunidad universitaria.
        </p>
        <button
          onClick={handleLoginRedirect}
          className="mt-6 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700"
        >
          Iniciar Sesión
        </button>
      </div>
    </main>
  );
}
