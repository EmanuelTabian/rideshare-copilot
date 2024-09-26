import styled from "styled-components";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartDateFormatter } from "../utils/helpers";

function EarningsGraph({ recentEntries }) {
  const sameDate =
    chartDateFormatter(recentEntries.at(0).pub_date) ===
    chartDateFormatter(recentEntries.at(-1).pub_date);

  const data = recentEntries.map((entry) => {
    return {
      label: chartDateFormatter(entry.pub_date),
      appIncome: entry.app_income,
      earnings: entry.earnings,
    };
  });

  return (
    <>
      <h1>Earnings graph</h1>
      <div>
        <h2>
          Sales from {chartDateFormatter(recentEntries.at(0).pub_date)}
          {!sameDate &&
            ` to
          ${chartDateFormatter(recentEntries.at(-1).pub_date)}`}
        </h2>
        <ResponsiveContainer width="80%" height={200}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="appIncome"
              stroke="#94150C"
              strokeWidth={2}
              fill="#FFC3BE"
              name="App income"
              unit="RON"
            />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#0C9445"
              strokeWidth={2}
              fill="#94FFC1"
              name="Earnings"
              unit="RON"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div>
        <ResponsiveContainer width="80%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              type="monotone"
              dataKey="appIncome"
              fill="#94150C"
              name="App income"
              unit="RON"
            />
            <Bar
              type="monotone"
              dataKey="earnings"
              fill="#0C9445"
              name="Earnings"
              unit="RON"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default EarningsGraph;
