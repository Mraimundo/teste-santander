"use client";

import { useEffect, useState } from "react";
import data from "../data/selic.json";
import { Selic, SelicContext } from "../contexts/selic-context";

type SelicProviderProps = {
  children: React.ReactNode;
};

export function SelicProvider(props: SelicProviderProps) {
  const { children } = props;
  const [selic, setSelic] = useState<Selic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSelic(data.data);
    setLoading(false);
  }, []);

  return (
    <SelicContext.Provider value={{ selic, loading }}>
      {children}
    </SelicContext.Provider>
  );
}
