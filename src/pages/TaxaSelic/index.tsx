import { ButtonBackToTop } from "../../components/ButtonBackToTop/ButtonBackToTop";
import { Header } from "../../components/Header/Header";
import { InflationTable } from "../../components/InflationTable/InflationTable";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { SelicChart } from "../../components/SelicChart/SelicChart";
import { useSelicData } from "../../hooks/selic-data";
import styles from "./selic.module.css";

const inflationData = [
  { month: "Janeiro/2023", projection: 3.5 },
  { month: "Fevereiro/2023", projection: 4.0 },
  { month: "Março/2023", projection: 4.25 },
  { month: "Abril/2023", projection: 5.0 },
  { month: "Maio/2023", projection: 5.5 },
  { month: "Junho/2023", projection: 6.0 },
];

export function TaxaSelic() {
  const { loading } = useSelicData();
  return (
    <>
      {!loading && <Header />}
      <SelicChart />
      <section className={styles.selicContainer}>
        <h2>Projeção de Inflação (próximos 12 meses)</h2>

        <SearchForm />
        <InflationTable inflationData={inflationData} />
      </section>
      <ButtonBackToTop />
    </>
  );
}
