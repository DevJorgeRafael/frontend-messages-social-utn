'use client'
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login");
  };

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
      </div>
    </main>
  );
}
