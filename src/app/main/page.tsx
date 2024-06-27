"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/authContext";
import { EstudianteComponent } from "@/pages/estudianteComponent";
import { ProfesorComponent } from "@/pages/profesorComponent";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  console.log(user);

  if (!user) return router.push("/login");

  if (user.estudiante) {
    return (
      <ProtectedRoute>
        {" "}
        <EstudianteComponent />{" "}
      </ProtectedRoute>
    );
  }

  if (user.profesor) {
    return (
      <ProtectedRoute>
        <ProfesorComponent />
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="h-screen items-center justify-center">
        <h1>Main Page</h1>
      </div>
    </ProtectedRoute>
  );
}
