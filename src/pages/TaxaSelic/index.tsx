import { ButtonBackToTop } from "../../components/ButtonBackToTop/ButtonBackToTop";
import { Header } from "../../components/Header/Header";
import { InflationTableContainer } from "../../components/InflationTable/InflationTable";
import { SelicChartContainer } from "../../components/SelicChart/SelicChart";
import styles from "./selic.module.css";

export function TaxaSelic() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <section className={styles.selicContainer}>
          <h2>Projeção de Inflação (próximos 12 meses)</h2>
          <InflationTableContainer />
        </section>
        <SelicChartContainer />
      </div>

      <ButtonBackToTop />
    </>
  );
}
