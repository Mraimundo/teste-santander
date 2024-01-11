import { SelicContext } from "../contexts/selic-context";
import { useContext } from "react";

export function useSelicData() {
  const context = useContext(SelicContext);
  return context;
}
