import styles from "./InflationTable.module.css";

type Inflation = {
  month: string;
  projection: number;
};

type InflationTableProps = {
  inflationData: Inflation[];
};

export function InflationTable({ inflationData }: InflationTableProps) {
  return (
    <div className={styles.Container}>
      <table className={styles.tableContainer}>
        <thead>
          <tr>
            <th>Mês/Ano</th>
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
