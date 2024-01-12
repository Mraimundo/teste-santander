// import { useSelicData } from "../../hooks/selic-data";
import styles from "./InflationTable.module.css";

type Inflation = {
  month: string;
  projection: number;
};

type InflationTableProps = {
  inflationData: Inflation[];
};

export function InflationTable({ inflationData }: InflationTableProps) {
  // const { selic } = useSelicData();

  // const SelidData = selic.flatMap((inflation) => inflation);
  // const selicFilterd = SelidData.map((item) => item);

  return (
    <div className={styles.Container}>
      <h2>Projeção de Inflação (próximos 12 meses)</h2>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>Mês</th>
            <th>Projeção</th>
          </tr>
        </thead>
        <tbody>
          {inflationData?.map((item, index) => (
            <tr key={index}>
              <th>{item.month}</th>
              <th>{item.projection}%</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
