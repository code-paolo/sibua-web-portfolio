import { links } from "@/navlinks";
import Link from "next/link";
import React from "react";

const DisplayNavLinks = () => {
  return (
    <>
      {links.map((item) => (
        <li key={item.title}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </>
  );
};

export default DisplayNavLinks;
