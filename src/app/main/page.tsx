"use client";
import { useEffect, useState } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/authContext";
import { EstudianteComponent } from "@/pages/estudianteComponent";
import { ProfesorComponent } from "@/pages/profesorComponent";
import { useRouter } from "next/navigation";
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";
import { Sidebar } from "@/components/Sidebar";

export default function Main() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const [view, setView] = useState("chat");

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (!user) {
    return null; // o un Spinner, o algún tipo de indicador de carga
  }

  return (
    <ProtectedRoute>
      <div className="flex h-screen">
        <Sidebar setView={setView} />
        <div className="flex-1">
          {(user as EstudianteDetalle).estudiante && (
            <EstudianteComponent view={view} setView={setView} />
          )}
          {(user as ProfesorDetalle).profesor && (
            <ProfesorComponent view={view} setView={setView} />
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
