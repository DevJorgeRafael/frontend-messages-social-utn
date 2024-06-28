import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export const LoginButton = () => {
    const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/login')}
      className="bg-blue-600 text-white hover:bg-blue-800"
    >
      Iniciar Sesión
    </Button>
  );
}
