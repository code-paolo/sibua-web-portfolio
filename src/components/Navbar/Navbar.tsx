import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import { links } from "@/navlinks";
import DisplayNavLinks from "../DisplayNavLinks";
const Navbar = () => {
  return (
    <nav className="fixed top-0 inset-0 w-screen bg-background/95 backdrop:blur-4xl h-24">
      <div className="flex justify-between lg:justify-center items-center px-10 lg:px-0">
        <Link href={links[0].href}>
          <Image
            priority
            className="mr-2"
            src="/ps_logo_nobg.png"
            alt="Paolo Sibua Logo"
            height={100}
            width={100}
          />
        </Link>
        <MobileNavbar>
          <MenuIcon className="lg:hidden" />
        </MobileNavbar>
        <ul className="lg:flex gap-x-8 items-center text-primary hidden">
          <DisplayNavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
