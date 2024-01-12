import { Header } from "../../components/Header/Header";
import { InflationTable } from "../../components/InflationTable/InflationTable";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { useSelicData } from "../../hooks/selic-data";
import styles from "./selic.module.css";

// const selicData = [
//   { date: 'Jan', selicRate: 4.25 },
//   { date: 'Feb', selicRate: 4.50 },
// ];

const inflationData = [
  { month: "Jan", projection: 3.5 },
  { month: "Feb", projection: 4.0 },
];

export function TaxaSelic() {
  const { loading } = useSelicData();
  return (
    <>
      {!loading && <Header />}
      <section className={styles.selicContainer}>
        <h2>Projeção de Inflação (próximos 12 meses)</h2>

        <SearchForm />
        <InflationTable inflationData={inflationData} />
      </section>
    </>
  );
}
