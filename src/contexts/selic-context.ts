import { createContext } from "react";

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

export type Selic = {
  id: number;
  author: Author;
};

type SelicContextData = {
  selic: Selic[];
  loading: boolean;
};

export const SelicContext = createContext<SelicContextData>(
  {} as SelicContextData
);
