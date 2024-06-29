'use client'
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-8">
          Red Social de la Universidad Técnica del Norte
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Bienvenidos a Social-UTN, red social oficial de la Universidad Técnica del
          Norte. Conéctate, comparte y colabora con la comunidad universitaria.
        </p>

        <Button className="bg-red-600 text-white hover:bg-red-700"
          onClick={() => router.push('/login')}
        >
          Iniciar Sesión
        </Button>
      </div>
    </main>
  );
}
