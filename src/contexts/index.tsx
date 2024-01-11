import { SelicProvider } from "./selic-provider";

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return <SelicProvider>{children}</SelicProvider>;
}
