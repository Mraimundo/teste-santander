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

import { api } from "../../lib/axios";
import styles from "./SelicChart.module.css";

interface SelicCharts {
  id: string;
  month: string;
  selicRate: string;
  year: string;
}

interface SelicChartProps {
  selicharts: SelicCharts[];
}

export function SelicChartContainer() {
  const [selicharts, setSelicharts] = useState<SelicCharts[]>([]);

  async function fetchSelicChart() {
    const response = await api.get("selicharts");
    setSelicharts(response.data);
  }

  useEffect(() => {
    fetchSelicChart();
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
