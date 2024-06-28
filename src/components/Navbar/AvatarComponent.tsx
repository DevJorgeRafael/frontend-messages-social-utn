import { NavbarContent } from "@nextui-org/navbar";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

export const AvatarComponent = () => {
  return (
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar name="Any name" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            className="h-14 gap-2 text-gray-800"
            textValue="Signed in as zoey@example.com"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="settings"
            textValue="My Settings"
          >
            My Settings
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="team_settings"
            textValue="Team Settings"
          >
            Team Settings
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="analytics"
            textValue="Analytics"
          >
            Analytics
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="system"
            textValue="System"
          >
            System
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="configurations"
            textValue="Configurations"
          >
            Configurations
          </DropdownItem>
          <DropdownItem
            className="text-gray-800"
            key="help_and_feedback"
            textValue="Help & Feedback"
          >
            Help & Feedback
          </DropdownItem>
          <DropdownItem
            className="text-red-800"
            key="logout"
            color="danger"
            textValue="Log Out"
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
};
