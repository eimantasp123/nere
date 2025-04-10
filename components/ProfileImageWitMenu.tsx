"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, UserCog } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * ProfileImageWitMenu component that displays a profile image with a dropdown menu.
 * @param {boolean} open - Indicates whether the dropdown menu is open or closed.
 * @param {function} setOpen - Function to set the open state of the dropdown menu.
 */
const ProfileImageWitMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9 lg:h-11 lg:w-11">
          <AvatarImage
            className="cursor-pointer object-cover"
            src="/hero-1.jpg"
          />
          <AvatarFallback className="bg-secondary">CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={10}
        align="end"
        className="bg-background w-48 space-y-1 rounded-2xl border border-neutral-200 p-2 shadow-lg"
      >
        <DropdownMenuItem
          onClick={() => router.push("/dashboard")}
          className="hover:bg-primary focus:bg-secondary cursor-pointer rounded-full px-4 py-2 text-nowrap transition-colors focus:outline-none"
        >
          <UserCog />
          Mano paskyra
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-primary focus:bg-secondary cursor-pointer rounded-full px-4 py-2 text-nowrap transition-colors focus:outline-none"
          onClick={() => {}}
        >
          <LogOut />
          Atsijungti
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileImageWitMenu;
