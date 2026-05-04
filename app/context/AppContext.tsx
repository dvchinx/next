"use client";
import { createContext, useContext, useState, type PropsWithChildren } from "react";

type AppContextValue = {
  nombre: string;
  setNombre: React.Dispatch<React.SetStateAction<string>>;
};

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function AppProvider({ children }: PropsWithChildren) {
  const [nombre, setNombre] = useState("Jesus");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
}