import styled from "styled-components";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { chartDateFormatter } from "../utils/helpers";

function EarningsGraph({ recentEntries }) {
  console.log(recentEntries);

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
          Sales from {chartDateFormatter(recentEntries.at(0).pub_date)} to{" "}
          {chartDateFormatter(recentEntries.at(-1).pub_date)}
        </h2>
        <ResponsiveContainer width="70%" height={250}>
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
    </>
  );
}

export default EarningsGraph;
