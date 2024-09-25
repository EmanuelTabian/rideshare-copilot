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

function EarningsGraph({ recentEntries }) {
  console.log(recentEntries);

  const data = recentEntries.map((entry) => {
    return {
      label: entry.pub_date,
      appIncome: entry.app_income,
      earnings: entry.earnings,
    };
  });

  return (
    <>
      <h1>Earnings graph</h1>
      <div>
        <h2>Sales from X to Y</h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="appIncome"
              stroke="#8884d8"
              fill="#8884d8"
              name="App income"
              unit="RON"
            />
            <Area
              type="monotone"
              dataKey="earnings"
              stroke="#82ca9d"
              fill="#82ca9d"
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
