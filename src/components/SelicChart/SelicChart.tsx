import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    month: "Marc",
    selicRate: 13.75,
    year: 2023,
  },
  {
    month: "Abr",
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
  {
    month: "Julho",
    selicRate: 11.75,
    year: 2023,
  },
];

export function SelicChart() {
  return (
    <div className={styles.selicChartContainer}>
      <h2>Histórico de Taxa Selic</h2>
      <LineChart
        width={800}
        height={350}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#eee" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="selicRate"
          stroke="#00837e"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
}
