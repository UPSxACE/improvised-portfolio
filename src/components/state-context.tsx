"use client";
import { createContext, ReactNode, useContext } from "react";

type State = {
  currentPage: number;
  next: () => void;
  previous: () => void;
};

const Context = createContext<State | null>(null);

export function useStateContext() {
  const value = useContext(Context);
  if (value === null) throw new Error("please define the context");
  return value;
}

export function StateContextProvider({ children }: { children: ReactNode }) {
  return <Context.Provider value={null}>{children}</Context.Provider>;
}
