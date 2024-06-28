"use client";
import { useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/authContext";
import { EstudianteComponent } from "@/pages/estudianteComponent";
import { ProfesorComponent } from "@/pages/profesorComponent";
import { useRouter } from "next/navigation";
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";

export default function Main() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  if (!user) {
    return null; // o un Spinner, o algún tipo de indicador de carga
  }

  // Verificación de tipo discriminado
  if ((user as EstudianteDetalle).estudiante) {
    return (
      <ProtectedRoute>
        <EstudianteComponent />
      </ProtectedRoute>
    );
  }

  if ((user as ProfesorDetalle).profesor) {
    return (
      <ProtectedRoute>
        <ProfesorComponent />
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="h-screen items-center justify-center">
        <h1 className="text-black">Main Page</h1>
      </div>
    </ProtectedRoute>
  );
}
