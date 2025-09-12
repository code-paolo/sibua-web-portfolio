"use client";
import { useLocalStorage } from "react-use";

import React, { useEffect } from "react";

const useDarkTheme = () => {
  const [value, setValue, remove] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    document.body.classList.add(value ?? "light");
  };
  useEffect(() => {
    toggleTheme();
  }, []);
};

export default useDarkTheme;
