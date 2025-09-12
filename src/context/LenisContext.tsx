"use client";
import React, { ReactNode } from "react";
import { ReactLenis, useLenis } from "lenis/react";

const LenisContext = ({ children }: { children: ReactNode }) => {
  useLenis();
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisContext;
