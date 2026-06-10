"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/user";

interface AppState {
  user: User | null;
  setUser: (user: User | null) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const AppStoreContext = createContext<AppState | undefined>(undefined);

export function AppStoreProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    // Synchronize class with html document element
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme: "light" | "dark") => {
    setThemeState(newTheme);
  };

  return (
    <AppStoreContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </AppStoreContext.Provider>
  );
}

export function useAppStore() {
  const context = useContext(AppStoreContext);
  if (!context) {
    throw new Error("useAppStore must be used within an AppStoreProvider");
  }
  return context;
}
