import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import styles from "./SelicChart.module.css";

const data = [
  {
    month: "Jan",
    selicRate: 13.75,
    year: 2023,
  },
  {
    month: "Fev",
    selicRate: 13.75,
    year: 2023,
  },
  {
    month: "Março",
    selicRate: 13.75,
    year: 2023,
  },
  {
    month: "Abril",
    selicRate: 12.75,
    year: 2023,
  },
  {
    month: "Maio",
    selicRate: 12.75,
    year: 2023,
  },
  {
    month: "Junho",
    selicRate: 12.25,
    year: 2023,
  },
];

export function SelicChart() {
  return (
    <section>
      <div className={styles.selicChartContainer}>
        <h2>Histórico de Taxa Selic</h2>
        <ResponsiveContainer width="100%" height={350} minWidth="0">
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="selicRate" stroke="#00837e" />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
