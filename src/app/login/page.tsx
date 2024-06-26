'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "@/context/authContext";

type FormData = {
    username: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const router = useRouter();
    const { login, isAuthenticated } = useAuth();
    console.log(isAuthenticated)

    useEffect(() => {
      if (isAuthenticated) {
        router.push('/main');
      }
    }, [isAuthenticated])

    const onSubmit: SubmitHandler<FormData> = data => {
        login({ usuario: data.username, contrasenia: data.password});
        router.push('/main')
    }

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h1 className="text-xl mb-4 text-gray-900">Iniciar Sesión</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2 text-gray-800">Usuario</label>
              <input
                {...register("username", { required: "El usuario es obligatorio" })}
                type="text"
                placeholder="Usuario"
                className="p-2 border border-gray-300 rounded w-full text-gray-800"
              />
              {errors.username && (
                <p className="text-red-500">{errors.username.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-800">Contraseña</label>
              <input
                {...register("password", { required: "La contraseña es oblogatoria" })}
                type="password"
                placeholder="Contraseña"
                className="p-2 border border-gray-300 rounded w-full text-gray-800"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    );
}
