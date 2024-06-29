import { NavbarContent } from "@nextui-org/navbar";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useAuth } from "@/context/authContext";
import { EstudianteDetalle } from "@/interfaces/academico/estudiante-detalle.interface";
import { ProfesorDetalle } from "@/interfaces/academico/profesor-detalle.interface";

export const AvatarComponent = () => {
  const {user, logout } = useAuth()
  console.log(user)

  const displayName = (user as EstudianteDetalle)?.estudiante?.est_nombre || (user as ProfesorDetalle)?.profesor?.pr_nombre || ""
  const displatLastName = (user as EstudianteDetalle)?.estudiante?.est_apellido || (user as ProfesorDetalle)?.profesor?.pr_apellido || ""
  const displayEmail = (user as EstudianteDetalle)?.estudiante?.est_email || (user as ProfesorDetalle)?.profesor?.pr_email || ""
  const displayUsuario = (user as EstudianteDetalle)?.estudiante?.est_usuario || (user as ProfesorDetalle)?.profesor?.pr_usuario || ""

  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar name={displayName} />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            className="h-14 gap-2 text-gray-800"
            textValue="Signed in as zoey@example.com"
          >
            <p className="font-semibold">{displayName} {displatLastName}</p>
            <p className="font-semibold">{displayEmail}</p>
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="settings"
            textValue="My Settings"
          >
            My Settings
          </DropdownItem>
          <DropdownItem
            className="text-red-800 font-semibold"
            key="logout"
            color="danger"
            textValue="Cerrar Sesión"
            onClick={logout}
          >
            Cerrar Sesión
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};
