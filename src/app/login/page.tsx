'use client';
import { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
    username: string;
    password: string;
}

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const router = useRouter();

    const onSubmit: SubmitHandler<FormData> = data => {
        console.log(data)

        //Lógica de autenticación
        router.push('main')
    }
}
