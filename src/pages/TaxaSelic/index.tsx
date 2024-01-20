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
        <h2>
          Histórico de Taxa Selic e Projeção de Inflação dos próximos 12 meses
        </h2>
        <div className={styles.wrapperContent}>
          <InflationTableContainer />
          <SelicChartContainer />
        </div>
      </div>

      <ButtonBackToTop />
    </>
  );
}
