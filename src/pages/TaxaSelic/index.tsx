import { Header } from "../../components/Header/Header";
import { useSelicData } from "../../hooks/selic-data";

export function TaxaSelic() {
  const { loading } = useSelicData();
  return (
    <>
      {!loading && <Header />}
      <h1>Tabela</h1>
    </>
  );
}
