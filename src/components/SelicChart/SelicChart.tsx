import { useEffect, useState } from "react";
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
import data from "../../services/data/selichartsData.json";

import styles from "./SelicChart.module.css";

interface SelicCharts {
  id: number;
  month: string;
  selicRate: number;
  year: string;
}

interface SelicChartProps {
  selicharts: SelicCharts[];
}

export function SelicChartContainer() {
  const [selicharts, setSelicharts] = useState<SelicCharts[]>([]);

  useEffect(() => {
    setSelicharts(data.data);
  }, []);

  return <SelicChart selicharts={selicharts} />;
}

function SelicChart({ selicharts }: SelicChartProps) {
  return (
    <section>
      <div className={styles.selicChartContainer}>
        <h2>Histórico de Taxa Selic</h2>
        <ResponsiveContainer width="85%" height={350} minWidth="0">
          <LineChart width={500} height={300} data={selicharts}>
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
