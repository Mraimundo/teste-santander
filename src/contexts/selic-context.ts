import { createContext } from "react";

type Selic = {
  month: string;
  selicRate?: number;
};

type Inflation = {
  month: string;
  projection?: number;
};

export type SelicData = {
  id: number;
  selicData: Selic[];
  inflationData: Inflation[];
};

type SelicContextData = {
  selic: SelicData[];
  loading: boolean;
};

export const SelicContext = createContext<SelicContextData>(
  {} as SelicContextData
);
