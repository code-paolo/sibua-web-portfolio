"use client";

import React, { ReactNode, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import DisplayNavLinks from "../DisplayNavLinks";

type MobileNavbar = {
  children: ReactNode;
};

const MobileNavbar = ({ children }: MobileNavbar) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = (e: React.MouseEvent) => {
    if (!(e.target instanceof HTMLAnchorElement)) return;
    setIsOpen(false);
  };
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="h-[400px] bg-background">
        <DrawerTitle />
        <DrawerDescription />
        <ul
          onClick={(e) => {
            handleDrawer(e);
          }}
          className="flex flex-col items-center gap-y-10 m-2 text-sm lg:text-base font-medium"
        >
          <DisplayNavLinks />
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
